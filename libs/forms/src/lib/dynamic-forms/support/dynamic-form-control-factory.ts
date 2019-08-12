import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef, Optional } from '@angular/core';
import { DynamicFormControl } from './dynamic-form-control';
import { FormFieldSchema } from '../typings';

export class DynamicControlRegistor {

    has(type: string): boolean {
        return false;
    }

    /**
     * If no type regested, return default control.
     * @param type 
     */
    get(type: string): DynamicFormControl {
        return null;
    }
}

@Injectable({providedIn: 'root'})
export class DynamicFormControlFactory {
    constructor(
        private readonly registor: DynamicControlRegistor,
        private readonly resolver: ComponentFactoryResolver
    ) { }

    createControl(viewContainerRef: ViewContainerRef, type: string): ComponentRef<DynamicFormControl> {
        if (!this.registor.has(type)) {
            console.warn(`No contol for type '${type}'`);
        }

        const controlType = this.registor.get(type) as any;
        const componentFactory = this.resolver.resolveComponentFactory<DynamicFormControl>(controlType);

        return viewContainerRef.createComponent(componentFactory);
    }
}