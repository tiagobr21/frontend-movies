import { Dispatch, SetStateAction } from "react";

import { IDataTableColumns, IDataTableRows } from "../../types/DataTable";

interface IDataTableCurrentPage {
    value: number;
    setState: Dispatch<SetStateAction<any>>;
}

interface IDataTableRequestSize {
    value: number;
    setState: Dispatch<SetStateAction<any>>;
    resetPageValue?: number | string;
}

export interface IDataTableProps {
    columns: IDataTableColumns[];
    rows: IDataTableRows[];
    total?: number;
    currentPage?: IDataTableCurrentPage;
    requestSize?: IDataTableRequestSize;
    emptySearch?: string;
    isLoading?: any;
    disablePerPage?: any;
    disablePagination?: any;
    height?: any;
    sticky?: any;
    noPagination?: any;
}
