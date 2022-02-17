export interface Header {
    Header: string;
    accesor: string;
    width?: number | string;
}
export interface Data {
    [key: string]: any;
}
export interface Options {
    draggable?: Boolean;
}
export interface DnD {
    dragged: Data;
    dropped: Data;
}
export interface Actions {
    onClickRow?: () => Data;
    onDropRow?: () => DnD;
    onOrderBy?: () => any;
}
export interface TableParams {
    headers: Header[];
    data: Data[];
    className?: string;
    options?: Options;
    actions?: Actions;
}
//# sourceMappingURL=types.d.ts.map