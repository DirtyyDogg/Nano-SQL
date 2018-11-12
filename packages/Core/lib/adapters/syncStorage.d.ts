import { INanoSQLAdapter, INanoSQLTable, INanoSQLPlugin, INanoSQLInstance } from "../interfaces";
export declare class SyncStorage implements INanoSQLAdapter {
    useLS?: boolean | undefined;
    plugin: INanoSQLPlugin;
    nSQL: INanoSQLInstance;
    _index: {
        [tableName: string]: any[];
    };
    _rows: {
        [tableName: string]: {
            [key: string]: any;
        };
    };
    _id: string;
    _ai: {
        [tableName: string]: number;
    };
    constructor(useLS?: boolean | undefined);
    connect(id: string, complete: () => void, error: (err: any) => void): void;
    createAndInitTable(tableName: string, tableData: INanoSQLTable, complete: () => void, error: (err: any) => void): void;
    disconnectTable(table: string, complete: () => void, error: (err: any) => void): void;
    dropTable(table: string, complete: () => void, error: (err: any) => void): void;
    disconnect(complete: () => void, error: (err: any) => void): void;
    write(table: string, pk: any, row: {
        [key: string]: any;
    }, complete: (pk: any) => void, error: (err: any) => void): void;
    read(table: string, pk: any, complete: (row: {
        [key: string]: any;
    } | undefined) => void, error: (err: any) => void): void;
    delete(table: string, pk: any, complete: () => void, error: (err: any) => void): void;
    readMulti(table: string, type: "range" | "offset" | "all", offsetOrLow: any, limitOrHeigh: any, reverse: boolean, onRow: (row: {
        [key: string]: any;
    }, i: number) => void, complete: () => void, error: (err: any) => void): void;
    getIndex(table: string, complete: (index: any[]) => void, error: (err: any) => void): void;
    getNumberOfRecords(table: string, complete: (length: number) => void, error: (err: any) => void): void;
}
