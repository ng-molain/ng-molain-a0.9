import { FormFieldSchema } from '../typings';

export abstract class AbstractDynamicFormControl<T extends FormFieldSchema = FormFieldSchema> {
    constructor(
        
    ) {
        
    }
}

export interface DynamicFormControl<T extends FormFieldSchema = FormFieldSchema> extends AbstractDynamicFormControl<T> {}