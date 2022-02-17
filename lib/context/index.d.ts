import React from 'react';
interface ITableContextProvider {
    children: React.ReactChild[];
    value: any;
}
export declare const TableContextProvider: React.FC<ITableContextProvider>;
export declare const useTableContext: () => {
    state: {
        headers: never[];
        data: never[];
        className: string;
        options: {
            draggable: boolean;
        };
        onOrderByColumn: string;
    };
    actions: {
        onClickRow: (e: any) => void;
        onDropRow: (e: any) => void;
        onOrderBy: (e: any) => void;
    };
};
export {};
//# sourceMappingURL=index.d.ts.map