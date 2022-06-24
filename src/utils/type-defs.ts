/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, Daniel Jonathan <daniel at cosmicverse dot org>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES LOSS OF USE, DATA, OR PROFITS OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

export type Compare<A, B, Q = A, R = never> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? Q : R

export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Voidable<T> = T | void

export type WritableKeys<T, K extends keyof T = keyof T> = {
  readonly [P in keyof Omit<T, K>]: T[P]
} & {
  -readonly [P in K]: T[P]
}

export type ReadonlyKeys<T, K extends keyof T = keyof T> = {
  -readonly [P in keyof Omit<T, K>]: T[P]
} & {
  readonly [P in K]: T[P]
}

export type PartialKeys<T, K extends keyof T = keyof T> = {
  [P in keyof Omit<T, K>]-?: T[P]
} & {
  [P in K]?: T[P]
}

export type RequiredKeys<T, K extends keyof T = keyof T> = {
  [P in keyof Omit<T, K>]?: T[P]
} & {
  [P in K]-?: T[P]
}

export type NullableKeys<T, K extends keyof T = keyof T> = {
  [P in keyof Omit<T, K>]: Exclude<T[P], null>
} & {
  [P in K]: T[P] | null
}

export type RestrictedKeys<T> = {
  [K: string | number | symbol]: unknown
} & {
  [K in keyof T]?: never
}

export type PartialRecord<K extends string | number | symbol, V> = {
  [P in K]?: V
}

export type KeysForTypes<T, V = T[keyof T]> = { [P in keyof T]-?: T[P] extends V ? P : never }[keyof T]
export type TypesForKeys<T, K extends keyof T> = T[K]

export type RequiredKeysFor<T> = Extract<keyof T, KeysForTypes<T, Exclude<T[keyof T], undefined>>>
export type NullableKeysFor<T> = Exclude<keyof T, KeysForTypes<T, Exclude<T[keyof T], null>>>
export type PartialKeysFor<T> = Exclude<keyof T, RequiredKeysFor<T>>

export type WritableKeysFor<T> = {
  [P in keyof T]-?: Compare<{ [K in P]: T[P] }, { -readonly [K in P]: T[P] }, P>
}[keyof T]

export type ReadonlyKeysFor<T> = {
  [P in keyof T]-?: Compare<{ [K in P]: T[P] }, { -readonly [K in P]: T[P] }, never, P>
}[keyof T]

export type PickPublic<T> = Pick<T, keyof T>
export type PickWritable<T> = Pick<T, WritableKeysFor<T>>
export type PickReadonly<T> = Pick<T, ReadonlyKeysFor<T>>
export type PickRequired<T> = Pick<T, RequiredKeysFor<T>>
export type PickNullable<T> = Pick<T, NullableKeysFor<T>>
export type PickPartial<T> = Pick<T, PartialKeysFor<T>>