import { FoundationError } from './error';
export declare class AssertError extends FoundationError {
}
export declare const assert: (statement: boolean, message: string) => boolean | never;
