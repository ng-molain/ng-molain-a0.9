import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CropperOptions, CropperEvent, CropperRef, CropperData } from '@ng-molain/components';
import * as _ from 'lodash';
import { NzUploadFile } from 'ng-zorro-antd';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'dev-cropper-demo',
  templateUrl: './cropper-demo.component.html',
  styleUrls: ['./cropper-demo.component.scss']
})
export class CropperDemoComponent implements OnInit {

  imageSrc: string | SafeUrl = '/assets/images/picture.jpg';
  options: CropperOptions;

  cropperRef: CropperRef;

  checkOptions = [
    { label: 'responsive', value: 'responsive', checked: true },
    { label: 'restore', value: 'restore', checked: true },
    { label: 'checkCrossOrigin', value: 'checkCrossOrigin', checked: true },
    { label: 'checkOrientation', value: 'checkOrientation', checked: true },
    { label: 'modal', value: 'modal', checked: true },
    { label: 'guides', value: 'guides', checked: true },
    { label: 'center', value: 'center', checked: true },
    { label: 'highlight', value: 'highlight', checked: true },
    { label: 'background', value: 'background', checked: true },
    { label: 'autoCrop', value: 'autoCrop', checked: true },
    { label: 'movable', value: 'movable', checked: true },
    { label: 'rotatable', value: 'rotatable', checked: true },
    { label: 'scalable', value: 'scalable', checked: true },
    { label: 'zoomable', value: 'zoomable', checked: true },
    { label: 'zoomOnTouch', value: 'zoomOnTouch', checked: true },
    { label: 'zoomOnWheel', value: 'zoomOnWheel', checked: true },
    { label: 'cropBoxMovable', value: 'cropBoxMovable', checked: true },
    { label: 'cropBoxResizable', value: 'cropBoxResizable', checked: true },
    { label: 'toggleDragModeOnDblclick', value: 'toggleDragModeOnDblclick', checked: true },
  ];

  get cropperReady(): boolean {
    return !!this.cropperRef;
  }

  get tmpData() {
    return this._tmpData;
  }
  set tmpData(value: any) {
    if (_.isObjectLike(value)) {
      this._tmpData = JSON.stringify(value);
    } else {
      this._tmpData = `${value}`;
    }
  }
  private _tmpData: string;

  get tmpDataObj() {
    if (_.isEmpty(this._tmpData)) {
      return;
    }
    return JSON.parse(this._tmpData);
  }

  data: CropperData = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    rotate: undefined,
    scaleX: undefined,
    scaleY: undefined,
  };

  @ViewChild("croppedResultContainer")
  croppedResultContainer: ElementRef<HTMLDivElement>;
  croppedCanvas: string;
  isModalVisible: boolean = false;

  constructor(
    private sanitize: DomSanitizer,
  ) { }

  ngOnInit() {
    this.options = {
      preview: '.img-preview'
    };
  }

  onCropperReady($e: CropperEvent) {
    const { source, event } = $e;
    // console.log('demo cropper ready?', source)
    this.cropperRef = source;
  }

  onCrop($e: CropperEvent) {
    const { event } = $e;
    const { detail } = event;

    // this.data = _.assign(this.data, detail);
    _.forOwn(detail, (value, key) => {
      if (_.has(this.data, key)) {
        this.data[key] = _.isNumber(value) ? Math.round(value) : value;
      }
    });

  }

  onCheckOption(value, key) {
    if (!this.cropperRef) {
      return ;
    }

    const opt = {} as any;
    opt[key] = value;

    this.cropperRef.setOptions(opt);
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    console.log(file);
    this.setUpFile(file);

    return false;
  };

  private setUpFile(file: File | any) {
    const URL = window.URL || window['webkitURL'];
    if (!URL) {
      return ;
    }

    if (/^image\/\w+/.test(file.type)) {
      const uploadedImageURL = URL.createObjectURL(file);
      console.log(uploadedImageURL);
      this.imageSrc = this.sanitize.bypassSecurityTrustUrl(uploadedImageURL);
      
      // cropper.destroy();
      // cropper = new Cropper(image, options);
    } else {
      window.alert('Please choose an image file.');
    }
  }

  getCroppedCanvas(params: any) {
    const result = this.cropperRef.getCroppedCanvas(params);

    const container = this.croppedResultContainer.nativeElement;

    container.innerHTML = "";
    container.appendChild(result);

    this.isModalVisible = true;
  }
}
