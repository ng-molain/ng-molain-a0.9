import { Component, OnInit, Input, ElementRef, ViewChild, ComponentFactoryResolver, ApplicationRef, Injector, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ExampleViewerComponent } from '../example-viewer/example-viewer.component';
import { DomPortalHost, ComponentPortal } from '@angular/cdk/portal';

// 直接导入的形式，webpack 打包后（Asciidoctor 中 转换语言不严谨的语法）会存在在问题，
// import Asciidoctor from 'asciidoctor';
declare var Asciidoctor: any;

@Component({
  selector: 'mls-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {
  private _portalHosts: DomPortalHost[] = [];

  @Input()
  set documentUrl(url: string) {
    this._fetchDocument(url);
  }

  private _documentFetchSubscription: Subscription;

  @ViewChild("docContainer", { static: true }) articleElement: ElementRef;

  constructor(
    private _elementRef: ElementRef,
    private _http: HttpClient,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private _injector: Injector,
    private _viewContainerRef: ViewContainerRef
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
    // window['adoc'] = doc;
    let rawContent = doc.convert() as string;
    // replace example repx
    rawContent = rawContent.replace(/<!-- eg\(([^)]+)\) -->/g, '<div ng-molain-docs-example="$1"></div>');
    
    // this._elementRef.nativeElement.innerHTML = rawContent;
    this._setArticleHtml(rawContent);

    // attach examples after set innerHTML
    this._loadExamples();
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

  private _loadExamples() {
    const componentName = 'ng-molain-docs-example';
    const componentClass = ExampleViewerComponent;

    const exampleElements = (this._elementRef.nativeElement as HTMLElement).querySelectorAll(`[${componentName}]`);

    Array.prototype.slice.call(exampleElements).forEach((element: Element) => {
      const example = element.getAttribute(componentName);
      const portalHost = new DomPortalHost(element, this._componentFactoryResolver, this._appRef, this._injector);
      const examplePortal = new ComponentPortal(componentClass, this._viewContainerRef);
      const exampleViewer = portalHost.attach(examplePortal);
      (exampleViewer.instance as ExampleViewerComponent).example = `eg-${example}`;

      this._portalHosts.push(portalHost);
    });
  }

}
