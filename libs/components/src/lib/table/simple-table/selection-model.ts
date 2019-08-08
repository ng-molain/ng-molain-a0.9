import { SelectionModel, SelectionChange } from "@angular/cdk/collections";

export class TableSelectionModel<T = any> extends SelectionModel<T> {

    constructor(_multiple?: boolean, initiallySelectedValues?: T[], _emitChanges?: boolean) {
        super(_multiple, initiallySelectedValues, _emitChanges);
    }
}

export interface TableSelectionChange<T = any> extends SelectionChange<T> {};