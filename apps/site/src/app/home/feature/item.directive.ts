import { Directive, HostBinding, HostListener, NgZone } from '@angular/core';

let a = 0;

@Directive({
    selector: '[mlsFratureItem]',
    exportAs: 'mlsFratureItem'
})
export class FeatureItemDirective {
    hover = false;

    id = a++;

    constructor(
        private _ngZone: NgZone
    ) {

    }

    value = 'mlsFratureItem aha' + (this.hover) + `${this.id}`;

    @HostListener('mouseenter', ['$event'])
    onMouseEnter($event) {
        console.log('mouse enter', $event);
        // this._ngZone.run(() => {
            this.hover = true;
            this.value = `${this.id}>>> ${this.hover}`;
        // })
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave() {
        this.hover = false;
        this.value = `${this.id}>>> ${this.hover}`;
    }
}