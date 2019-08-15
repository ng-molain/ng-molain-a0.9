import Cropper from 'cropperjs';

import { AbstractCropperProxy } from './cropper-proxy';
import { CropperOptions } from './cropper.typings';
import * as _ from 'lodash';
import { Subject } from 'rxjs';


export class CropperRef extends AbstractCropperProxy implements Cropper {


    get cropperInstance(): Cropper {
        return this._cropperInstance;
    }
    private _cropperInstance: Cropper;

    get options(): CropperOptions {
        return this._options;
    }
    private _options: CropperOptions;
    private _originalOptions: CropperOptions;


    $crop = new Subject<CustomEvent>();
    $cropEnd = new Subject<CustomEvent>();
    $cropMove = new Subject<CustomEvent>();
    $cropStart = new Subject<CustomEvent>();
    $ready = new Subject<CustomEvent>();
    $zoom = new Subject<CustomEvent>();


    constructor(
        private element: HTMLImageElement | HTMLCanvasElement,
        options: CropperOptions = {}
    ) {
        super();

        this._originalOptions = options;
        const _options = this._options = this._createOptions(this._originalOptions);

        this._createCropper(element, _options);
    }

    private _createCropper(element: HTMLImageElement | HTMLCanvasElement, options: CropperOptions = {}) {

        const cropperInst = this._cropperInstance = new Cropper(element, options);
        
        return cropperInst;
    }

    private _createOptions(originalOptions: CropperOptions) {
        const options = Object.assign({}, originalOptions);

        this._bindCallbackWrapperOptions(options);

        return options;
    }

    private _bindCallbackWrapperOptions(options: CropperOptions) {
        const cbs = <CropperOptions>{
            crop: (e) => this._onCrop(e),
            cropend: (e) => this._onCropEnd(e),
            cropmove: (e) => this._onCropMove(e),
            cropstart: (e) => this._onCropStart(e),
            ready: (e) => this._onReady(e),
            zoom: (e) => this._onZoom(e),
        };

        return Object.assign(options, cbs);
    }

    setOptions(options: CropperOptions) {
        if (!options || _.keys(options).length <= 0) {
            return ;
        }

        const doSetOption = () => {
            options = _.omitBy(options, _.isFunction);
            const mergedOptions = _.assign(this._options, options);

            const notBooleanOptions = _.pickBy(options, (value) => !_.isBoolean(value));
            if (_.keys(notBooleanOptions).length <= 0) {
                const cropBoxData = this.getCropBoxData();
                const canvasData = this.getCanvasData();

                // TODO: unsubscript ...
                this.$ready.subscribe(() => {
                    this.setCropBoxData(cropBoxData).setCanvasData(canvasData);
                })
            }

            this._cropperInstance.destroy();
            this._createCropper(this.element, mergedOptions);
        }

        if (!this._cropperInstance) {
            this.$ready.subscribe(() => {
                doSetOption();
            });
        } else {
            doSetOption();
        }
    }


    private _onCrop(event: CustomEvent) {
        const { crop } = this._originalOptions;
        if (_.isFunction(crop)) {
            crop(event);
        }

        event.stopPropagation();
        this.$crop.next(event);
    }

    private _onCropEnd(event: CustomEvent) {
        const { cropend } = this._originalOptions;
        if (_.isFunction(cropend)) {
            cropend(event);
        }

        event.stopPropagation();
        this.$cropEnd.next(event);
    }

    private _onCropMove(event: CustomEvent) {
        const { cropmove } = this._originalOptions;
        if (_.isFunction(cropmove)) {
            cropmove(event);
        }

        event.stopPropagation();
        this.$cropMove.next(event);
    }

    private _onCropStart(event: CustomEvent) {
        const { cropstart } = this._originalOptions;
        if (_.isFunction(cropstart)) {
            cropstart(event);
        }

        event.stopPropagation();
        this.$cropStart.next(event);
    }

    private _onReady(event: CustomEvent) {
        const { ready } = this._originalOptions;
        if (_.isFunction(ready)) {
            ready(event);
        }

        event.stopPropagation();
        this.$ready.next(event);
    }

    private _onZoom(event: CustomEvent) {
        const { zoom } = this._originalOptions;
        if (_.isFunction(zoom)) {
            zoom(event);
        }

        event.stopPropagation();
        this.$zoom.next(event);
    }

}