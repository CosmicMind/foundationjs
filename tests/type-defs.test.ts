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
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import test from 'ava'

import {
  guardFor,
  Nullable,
  Optional,
  Voidable,
  WritableKeys,
  ReadonlyKeys,
  PartialKeys,
  RequiredKeys,
  NullableKeys,
  RestrictedKeys,
  PartialRecord,
  ValueKeysFor,
  RequiredKeysFor,
  NullableKeysFor,
  PartialKeysFor,
  WritableKeysFor,
  ReadonlyKeysFor,
  PickPublic,
  PickWritable,
  PickReadonly,
  PickRequired,
  PickNullable,
  PickPartial,
} from '../src'

type A = {
  name: string
  age: number
  version: number
}

class B {
  private _name: string
  private _age: number

  get name(): string {
    return this._name
  }

  get age(): number {
    return this._age
  }

  constructor(_name: string,  _age: number) {
    this._name = _name
    this._age = _age
  }
}

test('Type Defs: Nullable', t => {
  let a: Nullable<number> = 1

  t.is(a, 1)

  a = null

  t.is(null, a)
})

test('Type Defs: Optional', t => {
  let a: Optional<number> = 1

  t.is(a, 1)

  a = void 0

  t.is(void 0, a)
})

test('Type Defs: Voidable', t => {
  const a = (): Voidable<number> => {
    return 1
  }

  const b = (): ReturnType<typeof a> => {
    return 1
  }

  const c = (): ReturnType<typeof a> => {
    // statement here
  }

  t.is(typeof a, typeof b)
  t.is(typeof a, typeof c)
  t.is(typeof b, typeof c)
})

test('Type Defs: WritableKeys', t => {
  const a: WritableKeys<Readonly<A>, 'name' | 'age'> = {
    name: 'jonathan',
    age: 2,
    version: 1,
  }

  a.name = 'daniel'
  a.age = 1
  // a.version = 1

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: ReadonlyKeys', t => {
  const a: ReadonlyKeys<A, 'age'> = {
    name: 'jonathan',
    age: 1,
    version: 2,
  }

  a.name = 'daniel'
  // a.age = 1
  a.version = 1

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: PartialKeys', t => {
  const a: PartialKeys<Required<A>, 'age'> = {
    name: 'daniel',
    version: 2,
  }

  a.name = 'daniel'
  a.age = 1
  a.version = 1

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: RequiredKeys', t => {
  const a: RequiredKeys<Partial<A>, 'age'> = {
    age: 1,
  }

  a.name = 'daniel'
  a.age = 1
  a.version = 1

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: NullableKeys', t => {
  const a: NullableKeys<A, 'age'> = {
    name: 'daniel',
    age: null,
    version: 1,
  }

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: RestrictedKeys', t => {
  const a: RestrictedKeys<A> = {
    test: 1,
  }

  // a.name = 'daniel'
  // a.age = 1
  // a.version = 1

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: PartialRecord', t => {
  const a: PartialRecord<'a' | 'b' | 'c', number> = {
    a: 1,
    b: 2,
  }

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: ValueKeysFor', t => {
  const a: A & {
    test?: string
  } = {
    name: 'daniel',
    age: 1,
    version: 1,
  }

  const fn = (key: ValueKeysFor<typeof a>): boolean =>
    'undefined' !== typeof key

  t.true(fn('name'))
  t.true(fn('age'))
  t.true(fn('version'))
  t.true(fn('test'))
})

test('Type Defs: RequiredKeysFor', t => {
  const a: A & {
    test?: string
  } = {
    name: 'daniel',
    age: 1,
    version: 1,
  }

  const fn = (key: RequiredKeysFor<typeof a>): boolean =>
    'undefined' !== typeof key

  t.true(fn('name'))
  t.true(fn('age'))
  t.true(fn('version'))
  // t.true(fn('test'))
})

test('Type Defs: NullableKeysFor', t => {
  const a: A & {
    test: string | null
  } = {
    test: null,
    name: 'daniel',
    age: 1,
    version: 1,
  }

  const fn = (key: NullableKeysFor<typeof a>): boolean =>
    'undefined' !== typeof key

  // t.true(fn('name'))
  // t.true(fn('age'))
  // t.true(fn('version'))
  t.true(fn('test'))
})

test('Type Defs: PartialKeysFor', t => {
  const a: A & {
    test?: string
  } = {
    name: 'daniel',
    age: 1,
    version: 1,
  }

  const fn = (key: PartialKeysFor<typeof a>): boolean =>
    'undefined' !== typeof key

  // t.true(fn('name'))
  // t.true(fn('age'))
  // t.true(fn('version'))
  t.true(fn('test'))
})

test('Type Defs: WritableKeysFor', t => {
  const a: A & {
    readonly test: string
  } = {
    test: 'hello',
    name: 'daniel',
    age: 1,
    version: 1,
  }

  const fn = (key: WritableKeysFor<typeof a>): boolean =>
    'undefined' !== typeof key

  t.true(fn('name'))
  t.true(fn('age'))
  t.true(fn('version'))
  // t.true(fn('test'))
})

test('Type Defs: ReadonlyKeysFor', t => {
  const a: A & {
    readonly test: string
  } = {
    test: 'hello',
    name: 'daniel',
    age: 1,
    version: 1,
  }

  const fn = (key: ReadonlyKeysFor<typeof a>): boolean =>
    'undefined' !== typeof key

  // t.true(fn('name'))
  // t.true(fn('age'))
  // t.true(fn('version'))
  t.true(fn('test'))
})

test('Type Defs: PickPublic', t => {
  const a: PickPublic<B> = {
    name: 'daniel',
    age: 1,
  }

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: PickWritable', t => {
  const a: PickWritable<WritableKeys<A, 'version'>> = {
    version: 1,
  }

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: PickReadonly', t => {
  const a: PickReadonly<ReadonlyKeys<A, 'version'>> = {
    version: 1,
  }

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: PickRequired', t => {
  const a: PickRequired<RequiredKeys<A, 'version'>> = {
    version: 1,
  }

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: PickNullable', t => {
  const a: PickNullable<NullableKeys<A, 'version'>> = {
    version: null,
  }

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})

test('Type Defs: PickPartial', t => {
  const a: PickPartial<PartialKeys<A, 'version'>> = {
    version: void 0,
  }

  t.true(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
})
