import Cropper from 'cropperjs';

export abstract class AbstractCropperProxy implements Cropper {

    abstract get cropperInstance(): Cropper;

    clear(): Cropper {
        this.cropperInstance.clear();
        return this;
    }
    
    crop(): Cropper {
        this.cropperInstance.crop();
        return this;
    }
    
    destroy(): Cropper {
        this.cropperInstance.destroy();
        return this;
    }
    
    disable(): Cropper {
        this.cropperInstance.disable();
        return this;
    }
    
    enable(): Cropper {
        this.cropperInstance.enable();
        return this;
    }
    
    getCanvasData(): Cropper.CanvasData {
        return this.cropperInstance.getCanvasData();
    }
    
    getContainerData(): Cropper.ContainerData {
        return this.cropperInstance.getContainerData();
    }
    
    getCropBoxData(): Cropper.CropBoxData {
        return this.cropperInstance.getCropBoxData();
    }
    
    getCroppedCanvas(options?: Cropper.GetCroppedCanvasOptions): HTMLCanvasElement {
        return this.cropperInstance.getCroppedCanvas(options);
    }
    
    getData(rounded?: boolean): Cropper.Data {
        return this.cropperInstance.getData(rounded);
    }
    
    getImageData(): Cropper.ImageData {
        return this.cropperInstance.getImageData();
    }
    
    move(offsetX: number, offsetY?: number): Cropper {
        this.cropperInstance.move(offsetX, offsetY);
        return this;
    }
    
    moveTo(x: number, y?: number): Cropper {
        this.cropperInstance.moveTo(x, y);
        return this;
    }
    
    replace(url: string, onlyColorChanged?: boolean): Cropper {
        this.cropperInstance.replace(url, onlyColorChanged);
        return this;
    }
    
    reset(): Cropper {
        this.cropperInstance.reset();
        return this;
    }
    
    rotate(degree: number): Cropper {
        this.cropperInstance.rotate(degree);
        return this;
    }
    
    rotateTo(degree: number): Cropper {
        this.cropperInstance.rotateTo(degree);
        return this;
    }
    
    scale(scaleX: number, scaleY?: number): Cropper {
        this.cropperInstance.scale(scaleX, scaleY);
        return this;
    }
    
    scaleX(scaleX: number): Cropper {
        this.cropperInstance.scaleX(scaleX);
        return this;
    }
    
    scaleY(scaleY: number): Cropper {
        this.cropperInstance.scaleY(scaleY);
        return this;
    }
    
    setAspectRatio(aspectRatio: number): Cropper {
        this.cropperInstance.setAspectRatio(aspectRatio);
        return this;
    }
    
    setCanvasData(data: Cropper.SetCanvasDataOptions): Cropper {
        this.cropperInstance.setCanvasData(data);
        return this;
    }
    
    setCropBoxData(data: Cropper.SetCropBoxDataOptions): Cropper {
        this.cropperInstance.setCropBoxData(data);
        return this;
    }
    
    setData(data: Cropper.SetDataOptions): Cropper {
        this.cropperInstance.setData(data);
        return this;
    }
    
    setDragMode(dragMode: Cropper.DragMode): Cropper {
        this.cropperInstance.setDragMode(dragMode);
        return this;
    }
    
    zoom(ratio: number): Cropper {
        this.cropperInstance.zoom(ratio);
        return this;
    }
    
    zoomTo(ratio: number, pivot?: { x: number; y: number; }): Cropper {
        this.cropperInstance.zoomTo(ratio, pivot);
        return this;
    }


}