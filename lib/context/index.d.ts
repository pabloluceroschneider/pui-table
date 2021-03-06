import React from 'react';
export declare const TableContextProvider: React.FC<{
    children: React.ReactChild[];
    value: any;
}>;
export declare const useTableContext: () => {
    state: {
        headers: never[];
        data: never[];
        className: string;
        options: {
            draggable: boolean;
        };
        orderByColumn: string;
    };
    actions: {
        log: (e: any) => void;
        orderBy: (e: any) => void;
        onDropRow: (e: any) => void;
    };
};
//# sourceMappingURL=index.d.ts.map