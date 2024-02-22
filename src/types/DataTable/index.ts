export interface IDataTableColumns {
    field: string;
    name: string;
    width: string;
    lastColumn?: boolean;
    colorMode?: boolean;
}

export interface IDataTableRows {
    [key: string]: any;
}
