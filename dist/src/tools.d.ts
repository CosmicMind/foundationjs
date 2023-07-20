export declare const timeout: (fn: () => void, timeout?: number) => () => void;
export declare const multistep: <T extends unknown[]>(steps: ((...args: T) => void)[], cb: () => void, ...args: T) => void;
export declare const clone: <T extends object>(value: T) => T;
export declare const equals: <T extends object>(a: T, b: T) => boolean;
export declare const unique: <T>(data: T[]) => T[];
export declare const assign: <T, U>(target: T, ...sources: U[]) => T;
export declare const swapProps: <T>(source: T, target: T) => T;
