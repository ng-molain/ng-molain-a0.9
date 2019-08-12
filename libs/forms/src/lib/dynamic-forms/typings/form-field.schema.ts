import { ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';

export interface FormFieldSchema {
    type: string;

    label?: string;
    name?: string;
    disabled?: boolean;
    placeholder?: string;
    value?: any;

    required: boolean;

    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;

    ui: any;

    [key: string]: any;
}


