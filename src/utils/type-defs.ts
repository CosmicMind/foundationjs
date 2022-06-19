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
  (<T>() => T extends A ? 0 : 1) extends
  (<T>() => T extends B ? 0 : 1) ? Q : R

export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Voidable<T> = T | void

export type Writable<T, K extends keyof T = keyof T> = Omit<T, K> & {
  -readonly [P in K]: T[P]
}

export type Immutable<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [P in K]: T[P]
}

export type WithOptional<T, K extends keyof T = keyof T> = Omit<T, K> & {
  [P in K]?: T[P]
}

export type WithRequired<T, K extends keyof T = keyof T> = Omit<T, K> & {
  [P in K]-?: Exclude<T[P], undefined>
}

export type ValueKeysFor<T, U = T[keyof T]> = Exclude<{ [P in keyof T]: T[P] extends U ? P : never }[keyof T], undefined>

export type RequiredKeysFor<T> = Extract<keyof T, ValueKeysFor<T, Exclude<T[keyof T], undefined>>>
export type NullableKeysFor<T> = Exclude<keyof T, ValueKeysFor<T, Exclude<T[keyof T], null>>>
export type OptionalKeysFor<T> = Exclude<keyof T, RequiredKeysFor<T>>

export type WritableKeysFor<T> = {
  [P in keyof T]-?: Compare<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
}[keyof T]

export type ReadonlyKeysFor<T> = {
  [P in keyof T]-?: Compare<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>
}[keyof T]

export type PublicOnly<T> = Pick<T, keyof T>
export type WritableOnly<T> = Pick<T, WritableKeysFor<T>>
export type ReadonlyOnly<T> = Pick<T, ReadonlyKeysFor<T>>
export type RequiredOnly<T> = Pick<T, RequiredKeysFor<T>>
export type NullableOnly<T> = Pick<T, NullableKeysFor<T>>
export type OptionalOnly<T> = Pick<T, OptionalKeysFor<T>>