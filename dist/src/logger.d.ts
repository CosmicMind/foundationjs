export declare const logger: {
    assert: (condition: boolean, data: string) => void;
    clear: () => void;
    count: (label?: string) => void;
    countReset: (label?: string) => void;
    debug: (...data: unknown[]) => void;
    error: (...data: unknown[]) => void;
    info: (...data: unknown[]) => void;
    log: (...data: unknown[]) => void;
    time: (label?: string) => void;
    timeEnd: (label?: string) => void;
    timeLog: (label?: string, ...data: unknown[]) => void;
    timeStamp: (label?: string) => void;
    trace: (...data: unknown[]) => void;
    warn: (...data: unknown[]) => void;
};
