export interface IFoundationError {
    get name(): string;
    get message(): string;
}
export declare class FoundationError extends Error implements IFoundationError {
    get name(): string;
    toString(): string;
}
export declare class FoundationTypeError extends TypeError implements IFoundationError {
    get name(): string;
    toString(): string;
}
