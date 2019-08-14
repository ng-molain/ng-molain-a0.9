import { Component, OnInit, ChangeDetectorRef, NgZone, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription, fromEvent } from 'rxjs';

import Cropper from 'cropperjs';

@Component({
  selector: 'ml-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CropperComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() imageSrc: string = "https://fengyuanchen.github.io/cropperjs/images/picture.jpg";

  @ViewChild("image", {static: false}) imageElementRef: ElementRef<HTMLImageElement>;

  private _keyboardSubscription: Subscription;

  constructor(
    private sanitize: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {
    this._keyboardSubscription = fromEvent(window, 'keydown').subscribe($event => this._onKeydown($event as KeyboardEvent));
  }

  ngOnInit() {
    // console.log("Cropper: ", typeof Cropper, Cropper);
  }

  ngAfterViewInit() {
    if (!this.imageElementRef) {
      throw new Error('The edit target is required and must be an <img> or <canvas> element.');
    }

    const imageElement: HTMLImageElement = this.imageElementRef.nativeElement;
    const cropper = new Cropper(imageElement, {
      autoCrop: false,
      dragMode: 'move',
      background: true,
      ready: () => {
        console.log(this);
      },
      crop: ({detail}) => {}
    });
  }

  ngOnDestroy() {
    this._keyboardSubscription.unsubscribe();
  }

  protected _onKeydown($event: KeyboardEvent) {
    const a: Cropper = null
  }
}
