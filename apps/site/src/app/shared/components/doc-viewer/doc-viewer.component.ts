import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import Asciidoctor from 'asciidoctor';

@Component({
  selector: 'nms-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {

  @Input()
  set documentUrl(url: string) {
    this._fetchDocument(url);
  }

  private _documentFetchSubscription: Subscription;

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

    this._documentFetchSubscription = this._http.get(url, {responseType: 'text'}).subscribe(
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
    const rawContent = asciidoctor.convert(content);
    this._elementRef.nativeElement.innerHTML = rawContent;
  }

  /** Show an error that occurred when fetching a document. */
  private _showError(url: string, error: HttpErrorResponse) {
    console.log(error);
    this._elementRef.nativeElement.innerText =
      `Failed to load document: ${url}. Error: ${error.statusText}`;
  }

}
