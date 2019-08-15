import { Component, OnInit, ChangeDetectorRef, NgZone, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef, ViewEncapsulation, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subscription, fromEvent, merge } from 'rxjs';

// import Cropper from 'cropperjs';
import { CropperRef, CropperOptions } from '../typings';
import * as _ from 'lodash';

export interface CropperEvent {
  source: CropperRef,
  event: CustomEvent
}

interface Message {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

@Component({
  selector: 'ml-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CropperComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  @Input() imageSrc: string | SafeUrl;

  @Input() options: CropperOptions;

  @Input() showSpin: boolean = true;
  @Input() showFeedback: boolean = true;
  @Input() loadImgErrorText: string = "图片加载失败，请检查网络或重新选择图片。";

  @ViewChild("image", { static: false }) imageElementRef: ElementRef<HTMLImageElement>;

  @Output() crop = new EventEmitter<CropperEvent>();
  @Output() cropEnd = new EventEmitter<CropperEvent>();
  @Output() cropMove = new EventEmitter<CropperEvent>();
  @Output() cropStart = new EventEmitter<CropperEvent>();
  @Output() ready = new EventEmitter<CropperEvent>();
  @Output() zoom = new EventEmitter<CropperEvent>();

  private _keyboardSubscription: Subscription;
  // private _eventSubscriptions: Subscription[];
  private _previousOptions: CropperOptions;

  loading: boolean = false;
  messages: Message[] = [];

  get hasMessage(): boolean {
    return !_.isEmpty(this.messages);
  }

  get cropperRef(): CropperRef {
    return this._cropperRef;
  }
  private _cropperRef: CropperRef;

  get reviceBacground() {
    if (this.cropperRef) {
      return this.cropperRef.options.background !== false;
    } else if (this.options) {
      return this.options.background !== false;
    }
    return true;
  }

  constructor(
    private sanitize: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {
    this._keyboardSubscription = fromEvent(window, 'keydown').subscribe($event => this._onKeydown($event as KeyboardEvent));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (!this.imageElementRef) {
      const msg = <Message>{ type: 'error', message: 'The edit target is required and must be an <img> or <canvas> element.' };
      this.messages.push(msg);

      throw new Error(msg.message);
    }

    const imageElement: HTMLImageElement = this.imageElementRef.nativeElement;
    
    fromEvent(imageElement, 'load').subscribe(($event) => {
      fromEvent(imageElement, 'ready').subscribe(($readyEvent) => {
        // console.log('image tag ready...')
        this.loading = false;
      });

      const cropperRef = this._initCropperRef(imageElement, this._previousOptions || this.options);
    });
    
    fromEvent(imageElement, 'error').subscribe(($event) => {
      this.messages.push({ type: 'error', message: this.loadImgErrorText });
      this.loading = false;

      if (this.cropperRef) {
        this.cropperRef.destroy();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const imageSrcChange = changes['imageSrc'];
    if (imageSrcChange) {
      this._imageSrcChanged(imageSrcChange);
    }
  }

  ngOnDestroy() {
    this._keyboardSubscription.unsubscribe();

    if (this.cropperRef) {
      this.cropperRef.destroy();
    }
  }

  private _imageSrcChanged(change: SimpleChange) {
    this.messages = [];
    this.loading = true;
    if (this.cropperRef) {
      // this.cropperRef.replace(change.currentValue);
      this._previousOptions = this.cropperRef.options;
      this.cropperRef.destroy();
    }

    // Check current value and first change

    // const imageElement: HTMLImageElement = this.imageElementRef.nativeElement;
    // imageElement.setAttribute('src', change.currentValue);
  }

  private _initCropperRef(element: HTMLImageElement | HTMLCanvasElement, options: CropperOptions): CropperRef {
    const cropperRef = this._cropperRef = new CropperRef(element, options);
    this._handleEvents(cropperRef);

    return cropperRef;
  }

  private _handleEvents(ref: CropperRef) {
    ref.$crop.subscribe(e => this.crop.emit({ source: ref, event: e }));
    ref.$cropEnd.subscribe(e => this.cropEnd.emit({ source: ref, event: e }));
    ref.$cropMove.subscribe(e => this.cropMove.emit({ source: ref, event: e }));
    ref.$cropStart.subscribe(e => this.cropStart.emit({ source: ref, event: e }));
    ref.$ready.subscribe(e => this.ready.emit({ source: ref, event: e }));
    ref.$zoom.subscribe(e => this.zoom.emit({ source: ref, event: e }));
  }

  private _onKeydown($event: KeyboardEvent) {
  }
}
