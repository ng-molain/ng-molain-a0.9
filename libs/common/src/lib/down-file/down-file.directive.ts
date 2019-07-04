import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Directive({
  selector: '[mlDownFile]'
})
export class DownFileDirective {

  private isFileSaverSupported = true;
  /** URL请求参数 */
  @Input() httpData: {};
  /** 请求类型 */
  @Input() httpMethod: string = 'get';
  /** 下载地址 */
  @Input() httpUrl: string;
  /** 指定文件名，若为空从服务端返回的 `header` 中获取 `filename`、`x-filename` */
  @Input() fileName: string;
  /** 成功回调 */
  @Output() readonly success = new EventEmitter<HttpResponse<Blob>>();
  /** 错误回调 */
  @Output() readonly error = new EventEmitter<any>();

  private getDisposition(data: string | null) {
    const arr: Array<{}> = (data || '')
      .split(';')
      .filter(i => i.includes('='))
      .map(v => {
        const strArr = v.split('=');
        const utfId = `UTF-8''`;
        let value = strArr[1];
        if (value.startsWith(utfId)) value = value.substr(utfId.length);
        return { [strArr[0].trim()]: value };
      });
    return arr.reduce((_o, item) => item, {});
  }

  constructor(private el: ElementRef<HTMLButtonElement>, private _http: HttpClient) {
    let isFileSaverSupported = false;
    try {
      isFileSaverSupported = !!new Blob();
    } catch {}
    this.isFileSaverSupported = isFileSaverSupported;
    if (!isFileSaverSupported) {
      el.nativeElement.classList.add(`ml-down-file__not-support`);
    }
  }

  private setDisabled(status: boolean): void {
    const el = this.el.nativeElement;
    el.disabled = status;
    el.classList[status ? 'add' : 'remove'](`ml-down-file__disabled`);
  }

  @HostListener("click")
  _click() {
    if (!this.isFileSaverSupported) {
      return;
    }
    this.setDisabled(true);
    this._http
      .request(this.httpMethod, this.httpUrl, {
        params: this.httpData || {},
        responseType: 'blob',
        observe: 'response',
      })
      .subscribe(
        (res: HttpResponse<Blob>) => {
          if (res.status !== 200 || res.body!.size <= 0) {
            this.error.emit(res);
            return;
          }
          const disposition = this.getDisposition(res.headers.get('content-disposition'));
          const fileName =
            this.fileName ||
            disposition[`filename*`] ||
            disposition[`filename`] ||
            res.headers.get('filename') ||
            res.headers.get('x-filename');
          saveAs(res.body, decodeURI(fileName));
          this.success.emit(res);
        },
        err => this.error.emit(err),
        () => this.setDisabled(false),
      );
  }

}
