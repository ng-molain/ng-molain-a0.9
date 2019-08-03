export interface Pagination {
    /** Is first page */
    first: boolean;
    /** Is last page */
    last: boolean;
    /** Current page number */
    number: number;
    /** Number of current page elements */
    numberOfElements: number;
    /** Size of per page */
    size: number;

    // sort?: Sort[];

    /** Number of total elements */
    totalElements: number;
    /** Number of total pages */
    totalPages: number;
}

export interface PageRequest {
    page: number;
    size: number;
    sort?: string;
}