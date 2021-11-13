export interface Header {
    Header: string;
    accesor: string;
    width?: number;
}
export interface Data {
    [key: string]: any;
}
export interface TableParams {
    headers: Header[];
    data: Data[];
    className?: string;
}
//# sourceMappingURL=types.d.ts.map