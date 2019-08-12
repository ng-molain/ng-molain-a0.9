import { Injectable } from '@angular/core';
import { FormFieldSchema } from '../typings';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControlOptions } from '@angular/forms';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class DynamicFormBuilder {

    group(fields: FormFieldSchema[]): FormGroup {

        const formGroup = new FormGroup({});

        fields.map(field => {
            const { name, disabled, value, required, validatorOrOpts, asyncValidator } = field;

            const formControl = new FormControl({ value, disabled }, validatorOrOpts, asyncValidator);

            formGroup.addControl(name, formControl);
        });

        return formGroup;
    }

}

function mergeValidators(validatorOrOpts: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, validatorFn: ValidatorFn) {
    let _validatorOrOpts: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;

    if (_.isArray(validatorOrOpts)) {
        if (!_.includes(validatorOrOpts, Validators.required)) {
            validatorOrOpts.push(Validators.required);
            _validatorOrOpts = validatorOrOpts;
        }
    } else if (_.isFunction(validatorOrOpts)) {
        if (validatorOrOpts !== Validators.required) {
            _validatorOrOpts = [validatorOrOpts, Validators.required];
        }
    } else if (_.has(validatorOrOpts, 'validators') || _.has(validatorOrOpts, 'validators') || _.has(validatorOrOpts, 'updateOn')) {
        // ... array or fn
    }
}