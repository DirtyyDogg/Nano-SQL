import { INanoSQLQuery } from "./interfaces";
export declare const binarySearch: (arr: any[], value: any, startVal?: number | undefined, endVal?: number | undefined) => number;
export declare const buildQuery: (table: string | any[] | (() => Promise<any[]>), action: string) => INanoSQLQuery;
export declare const noop: () => void;
export declare const throwErr: (err: any) => never;
/**
 * Object.assign, but faster.
 *
 * @param {*} obj
 * @returns
 */
export declare const _assign: (obj: any) => any;
/**
 * Compare two javascript variables for equality.
 * Works with primitives, arrays and objects recursively.
 *
 * @param {*} obj1
 * @param {*} obj2
 * @returns {boolean}
 */
export declare const doObjectsEqual: (obj1: any, obj2: any) => boolean;
export declare class NanoSQLBuffer {
    processItem?: ((item: any, count: number, complete: () => void, error: (err: any) => void) => void) | undefined;
    onError?: ((err: any) => void) | undefined;
    onComplete?: (() => void) | undefined;
    private _items;
    private _going;
    private _done;
    private _count;
    private _triggeredComplete;
    constructor(processItem?: ((item: any, count: number, complete: () => void, error: (err: any) => void) => void) | undefined, onError?: ((err: any) => void) | undefined, onComplete?: (() => void) | undefined);
    private _progressBuffer;
    finished(): void;
    newItem(item: any, processFn?: (item: any, complete: () => void, err?: (error: any) => void) => void): void;
}
/**
 * Quickly and efficiently fire asyncrounous operations in sequence, returns once all operations complete.
 *
 * @param {any[]} items
 * @param {(item: any, i: number, next: (result?: any) => void) => void} callback
 * @returns {Promise<any[]>}
 */
export declare const chainAsync: (items: any[], callback: (item: any, i: number, next: (value?: any) => void, err?: ((err: any) => void) | undefined) => void) => Promise<any[]>;
/**
 * Quickly and efficiently fire asyncrounous operations in parallel, returns once all operations are complete.
 *
 * @param {any[]} items
 * @param {(item: any, i: number, done: (result?: any) => void) => void} callback
 * @returns {Promise<any[]>}
 */
export declare const allAsync: (items: any[], callback: (item: any, i: number, next: (value: any) => void, err: (err: any) => void) => void) => Promise<any[]>;
export declare const isSafari: boolean;
export declare const isMSBrowser: boolean;
export declare const isAndroid: boolean;
/**
 * Generate a random 16 bit number using strongest entropy/crypto available.
 *
 * @returns {number}
 */
export declare const random16Bits: () => number;
export declare const throttle: (func: any, limit: number) => (...args: any[]) => void;
/**
 * Generate a TimeID for use in the database.
 *
 * @param {boolean} [ms]
 * @returns {string}
 */
export declare const timeid: (ms?: boolean | undefined) => string;
/**
 * See if two arrays intersect.
 *
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {boolean}
 */
export declare const intersect: (arr1: any[], arr2: any[]) => boolean;
/**
 * Generates a valid V4 UUID using the strongest crypto available.
 *
 * @returns {string}
 */
export declare const uuid: () => string;
/**
 * A quick and dirty hashing function, turns a string into a md5 style hash.
 * Stolen from https://github.com/darkskyapp/string-hash
 *
 * @param {string} str
 * @returns {string}
 */
export declare const hash: (str: string) => string;
/**
 * Generate a row ID given the primary key type.
 *
 * @param {string} primaryKeyType
 * @param {number} [incrimentValue]
 * @returns {*}
 */
export declare const generateID: (primaryKeyType: string, incrimentValue?: number | undefined) => any;
/**
 * Clean the arguments from an object given an array of arguments and their types.
 *
 * @param {string[]} argDeclarations
 * @param {StdObject<any>} args
 * @returns {StdObject<any>}
 */
export declare const cleanArgs: (argDeclarations: string[], args: {
    [key: string]: any;
}) => {
    [key: string]: any;
};
/**
 * Determine if a given value is a javascript object or not. Exludes Arrays, Functions, Null, Undefined, etc.
 *
 * @param {*} val
 * @returns {boolean}
 */
export declare const isObject: (val: any) => boolean;
export declare const objSort: (path?: string | undefined, rev?: boolean | undefined) => (a: any, b: any) => number;
/**
 * Cast a javascript variable to a given type. Supports typescript primitives and more specific types.
 *
 * @param {string} type
 * @param {*} [val]
 * @returns {*}
 */
export declare const cast: (type: string, val: any, allowUknownTypes?: boolean | undefined) => any;
/**
 * "As the crow flies" or Haversine formula, used to calculate the distance between two points on a sphere.
 *
 * The unit used for the radius will determine the unit of the answer.  If the radius is in km, distance provided will be in km.
 *
 * The radius is in km by default.
 *
 * @param {number} lat1
 * @param {number} lon1
 * @param {number} lat2
 * @param {number} lon2
 * @param {number} radius
 * @returns {number}
 */
export declare const crowDistance: (lat1: number, lon1: number, lat2: number, lon2: number, radius?: number) => number;
export declare const resolvePath: (pathQuery: string) => string[];
export declare const getFnValue: (row: any, str: string) => any;
/**
 * Recursively freeze a javascript object to prevent it from being modified.
 *
 * @param {*} obj
 * @returns
 */
export declare const deepFreeze: (obj: any) => any;
export declare const deepSet: (pathQuery: string | string[], object: any, value: any) => any;
/**
 * Take an object and a string describing a path like "value.length" or "val[length]" and safely get that value in the object.
 *
 * objQuery("hello", {hello: 2}) => 2
 * objQuery("hello.length", {hello: [0]}) => 1
 * objQuery("hello[0]", {hello: ["there"]}) => "there"
 * objQuery("hello[0].length", {hello: ["there"]}) => 5
 * objQuery("hello.color.length", {"hello.color": "blue"}) => 4
 *
 * @param {string} pathQuery
 * @param {*} object
 * @param {boolean} [ignoreFirstPath]
 * @returns {*}
 */
export declare const deepGet: (pathQuery: string | string[], object: any) => any;
export declare const _maybeAssign: (obj: any) => any;
export declare const setFast: (...args: any[]) => void;
