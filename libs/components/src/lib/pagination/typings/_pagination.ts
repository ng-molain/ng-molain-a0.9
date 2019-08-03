
/**
 * Spring Like Api response page sort.
 */
export interface Sort {
    ascending?: boolean;
    descending?: boolean;
    direction?: string;
    ignoreCase?: boolean;
    nullHandling?: string;
    property: string;
}

/**
 * Spring Like Api response page.
 */
export interface ResponsePage {
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    sort: string | Sort | Sort[];
    totalElements: number;
    totalPages: number;
    
    content: any[];
}

export interface RequestPage {
    page: number;
    size: number;
    
    sort: Sort[]; // request as string...
}