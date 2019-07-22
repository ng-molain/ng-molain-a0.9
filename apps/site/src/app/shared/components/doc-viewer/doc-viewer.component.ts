import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

// 直接导入的形式，webpack 打包后（Asciidoctor 中 转换语言不严谨的语法）会存在在问题，
// import Asciidoctor from 'asciidoctor';
declare var Asciidoctor: any;

@Component({
  selector: 'mls-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {

  @Input()
  set documentUrl(url: string) {
    this._fetchDocument(url);
  }

  private _documentFetchSubscription: Subscription;

  @ViewChild("docContainer", { static: true }) articleElement: ElementRef;

  constructor(
    private _elementRef: ElementRef,
    private _http: HttpClient,
  ) { }

  ngOnInit() {
  }

  private _fetchDocument(url: string) {
    // cancel previous pending request
    if (this._documentFetchSubscription) {
      this._documentFetchSubscription.unsubscribe();
    }

    this._documentFetchSubscription = this._http.get(url, { responseType: 'text' }).subscribe(
      content => this._updateContent(content),
      error => this._showError(url, error)
    );
  }

  /**
   * Updates the displayed document.
   * @param rawDocument The raw document content to show.
   */
  private _updateContent(content: string) {
    // console.log(content);
    const asciidoctor = Asciidoctor();
    // @see https://asciidoctor.org/docs/user-manual/#attribute-catalog
    // const rawContent = asciidoctor.convert(content, { 'safe': 'server', 'attributes': { 'showtitle': true, 'icons': 'font' } });
    // const rawContent = asciidoctor.convert(content, { 'safe': 'server', 'attributes': { 'showtitle': true, 'icons': 'font', 'toc': 'auto', 'toc-title': '目录' } });
    const doc = asciidoctor.load(content, { 'safe': 'server', 'attributes': { 'showtitle': true, 'icons': 'font', 'toc': 'auto', 'toc-title': '目录' } });
    window['adoc'] = doc;
    const rawContent = doc.convert();
    // this._elementRef.nativeElement.innerHTML = rawContent;
    this._setArticleHtml(rawContent);
  }

  /** Show an error that occurred when fetching a document. */
  private _showError(url: string, error: HttpErrorResponse) {
    console.log(error);
    this._elementRef.nativeElement.innerText =
      `Failed to load document: ${url}. Error: ${error.statusText}`;
  }

  private _setArticleHtml(rawContent: string) {
    this.articleElement.nativeElement.innerHTML = rawContent;
  }

}
