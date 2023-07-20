export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Voidable<T> = T | void;
export type Compare<A, B, Q = A, R = never> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? Q : R;
export type WritableKeys<T, K extends keyof T = keyof T> = {
    readonly [P in keyof Omit<T, K>]: T[P];
} & {
    -readonly [P in K]: T[P];
};
export type ReadonlyKeys<T, K extends keyof T = keyof T> = {
    -readonly [P in keyof Omit<T, K>]: T[P];
} & {
    readonly [P in K]: T[P];
};
export type PartialKeys<T, K extends keyof T = keyof T> = {
    [P in keyof Omit<T, K>]-?: T[P];
} & {
    [P in K]?: T[P];
};
export type RequiredKeys<T, K extends keyof T = keyof T> = {
    [P in keyof Omit<T, K>]?: T[P];
} & {
    [P in K]-?: T[P];
};
export type NullableKeys<T, K extends keyof T = keyof T> = {
    [P in keyof Omit<T, K>]: Exclude<T[P], null>;
} & {
    [P in K]: T[P] | null;
};
export type RestrictedKeys<T> = {
    [K: string | number | symbol]: unknown;
} & {
    [K in keyof T]?: never;
};
export type PartialRecord<K extends string | number | symbol, V> = {
    [P in K]?: V;
};
export type KeysForTypes<T, V = T[keyof T]> = {
    [P in keyof T]-?: T[P] extends V ? P : never;
}[keyof T];
export type TypesForKeys<T, K extends keyof T = keyof T> = T[K];
export type RequiredKeysFor<T> = Extract<keyof T, KeysForTypes<T, Exclude<T[keyof T], undefined>>>;
export type NullableKeysFor<T> = Exclude<keyof T, KeysForTypes<T, Exclude<T[keyof T], null>>>;
export type PartialKeysFor<T> = Exclude<keyof T, RequiredKeysFor<T>>;
export type WritableKeysFor<T> = {
    [P in keyof T]-?: Compare<{
        [K in P]: T[P];
    }, {
        -readonly [K in P]: T[P];
    }, P>;
}[keyof T];
export type ReadonlyKeysFor<T> = {
    [P in keyof T]-?: Compare<{
        [K in P]: T[P];
    }, {
        -readonly [K in P]: T[P];
    }, never, P>;
}[keyof T];
export type PickPublic<T> = Pick<T, keyof T>;
export type PickWritable<T> = Pick<T, WritableKeysFor<T>>;
export type PickReadonly<T> = Pick<T, ReadonlyKeysFor<T>>;
export type PickRequired<T> = Pick<T, RequiredKeysFor<T>>;
export type PickNullable<T> = Pick<T, NullableKeysFor<T>>;
export type PickPartial<T> = Pick<T, PartialKeysFor<T>>;
export type DeepReadonly<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P] extends Record<string | number | symbol, unknown> | unknown[] ? DeepReadonly<T[P]> : T[P];
};
