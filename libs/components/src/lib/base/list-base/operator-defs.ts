
export interface Operator {
    text: string;
    isMatch: (source: any, value: any) => boolean
}

export interface Operators {
    nofilter: {
        text: string;
        isMatch: () => boolean;
    },
    contains: Operator;
    equal: Operator;
    notequal: Operator;
    beginwith: Operator;
    endwith: Operator;
    less: Operator;
    lessorequal: Operator;
    greater: Operator;
    greaterorequal: Operator;
}

export const DEFAULT_OPERATORS: Operators = {} as Operators;