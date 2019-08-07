import { Pageable, Pagination } from './pagination';
import * as _ from 'lodash';

const DEFAULT_PAGEABLE: Pageable = {
    page: 0,
    size: 10
}

// const oneIndexedParameter = false;

export class PageImpl implements Pagination {
    oneIndexedParameter = false;

    constructor(
        private readonly listData: any[],
        private readonly total: number, 
        private pageable: Pageable = DEFAULT_PAGEABLE) {
        pageable = {...pageable};
    }

    private get startPage() {
        return this.oneIndexedParameter ? 1 : 0;
    }

    get content(): any[] {
        if (_.isEmpty(this.listData)) {
            return [];
        }

        if (_.size(this.listData) <= this.size) {
            return this.listData;
        }

        const offset = (_.size(this.listData) === this.totalElements) ? this.number * this.size : 0;
        return this.listData.slice(offset, offset + this.size);
    }

    get first(): boolean {
        return  this.number <= this.startPage; 
    }

    get last(): boolean {
        return this.totalPages <= this.number - this.startPage + 1;
    }
    
    get number(): number {
        const { page } = this.pageable;
        return +page < this.startPage ? this.startPage : (+page > this.totalPages ? this.totalPages : +page);
    }

    set number(value: number) {
        // TODO: validate
        this.pageable.page = value;
    }
    
    get numberOfElements(): number {
        return _.size(this.content);
    }
    
    get size(): number {
        const { size } = this.pageable;
        return +size > 0 ? size : DEFAULT_PAGEABLE.size;
    }

    set size(value: number) {
        // validate
        if (value > 0) {
            this.pageable.size = value;
        }
    }
    
    get totalElements(): number {
        if (_.isEmpty(this.listData)) {
            return this.total;
        } else {
            return Math.max(_.size(this.listData), this.total);
        }
    }
    
    get totalPages(): number {
        const {size, totalElements} = this;
        return Math.ceil(totalElements / size);
    }
    
}