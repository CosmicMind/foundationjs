/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
  it,
  expect,
  describe,
} from 'vitest'

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
  KeysForTypes,
  TypesForKeys,
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

describe('Type Defs', () => {
  it('Nullable', () => {
    let a: Nullable<number> = 1

    expect(a).toBe(1)

    a = null

    expect(null).toBe(a)
  })

  it('Optional', () => {
    let a: Optional<number> = 1

    expect(a).toBe(1)

    a = void 0

    expect(void 0).toBe(a)
  })

  it('Voidable', () => {
    const a = (): Voidable<number> => {
      return 1
    }

    const b = (): ReturnType<typeof a> => {
      return 1
    }

    const c = (): ReturnType<typeof a> => {
    // statement here
    }

    expect(typeof a).toBe(typeof b)
    expect(typeof a).toBe(typeof c)
    expect(typeof b).toBe(typeof c)
  })

  it('WritableKeys', () => {
    const a: WritableKeys<Readonly<A>, 'name' | 'age'> = {
      name: 'jonathan',
      age: 2,
      version: 1,
    }

    a.name = 'daniel'
    a.age = 1
    // a.version = 1

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[]))
  })

  it('ReadonlyKeys', () => {
    const a: ReadonlyKeys<A, 'age'> = {
      name: 'jonathan',
      age: 1,
      version: 2,
    }

    a.name = 'daniel'
    // a.age = 1
    a.version = 1

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('PartialKeys', () => {
    const a: PartialKeys<Required<A>, 'age'> = {
      name: 'daniel',
      version: 2,
    }

    a.name = 'daniel'
    a.age = 1
    a.version = 1

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('RequiredKeys', () => {
    const a: RequiredKeys<Partial<A>, 'age'> = {
      age: 1,
    }

    a.name = 'daniel'
    a.age = 1
    a.version = 1

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('NullableKeys', () => {
    const a: NullableKeys<A, 'age'> = {
      name: 'daniel',
      age: null,
      version: 1,
    }

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('RestrictedKeys', () => {
    const a: RestrictedKeys<A> = {
      test: 1,
    }

    // a.name = 'daniel'
    // a.age = 1
    // a.version = 1

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('PartialRecord', () => {
    const a: PartialRecord<'a' | 'b' | 'c', number> = {
      a: 1,
      b: 2,
    }

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('KeysForTypes', () => {
    const a: A & {
    test?: string
  } = {
    name: 'daniel',
    age: 1,
    version: 1,
  }

    const fn = (key: KeysForTypes<typeof a>): boolean =>
      'undefined' !== typeof key

    expect(fn('name')).toBeTruthy()
    expect(fn('age')).toBeTruthy()
    expect(fn('version')).toBeTruthy()
    expect(fn('test')).toBeTruthy()
  })

  it('TypeForKeys', () => {
    const a: A = {
      name: 'daniel',
      age: 1,
      version: 1,
    }

    const fn = (key: TypesForKeys<typeof a, 'age'>): boolean =>
      'undefined' !== typeof key

    expect(fn(1)).toBeTruthy()
    expect(fn(1)).toBeTruthy()
    expect(fn(1)).toBeTruthy()
    expect(fn(1)).toBeTruthy()
  })

  it('RequiredKeysFor', () => {
    const a: A & {
    test?: string
  } = {
    name: 'daniel',
    age: 1,
    version: 1,
  }

    const fn = (key: RequiredKeysFor<typeof a>): boolean =>
      'undefined' !== typeof key

    expect(fn('name')).toBeTruthy()
    expect(fn('age')).toBeTruthy()
    expect(fn('version')).toBeTruthy()
  // expect(fn('test')).toBeTruthy()
  })

  it('NullableKeysFor', () => {
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

    // expect(fn('name')).toBeTruthy()
    // expect(fn('age')).toBeTruthy()
    // expect(fn('version')).toBeTruthy()
    expect(fn('test')).toBeTruthy()
  })

  it('PartialKeysFor', () => {
    const a: A & {
    test?: string
  } = {
    name: 'daniel',
    age: 1,
    version: 1,
  }

    const fn = (key: PartialKeysFor<typeof a>): boolean =>
      'undefined' !== typeof key

    // expect(fn('name')).toBeTruthy()
    // expect(fn('age')).toBeTruthy()
    // expect(fn('version')).toBeTruthy()
    expect(fn('test')).toBeTruthy()
  })

  it('WritableKeysFor', () => {
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

    expect(fn('name')).toBeTruthy()
    expect(fn('age')).toBeTruthy()
    expect(fn('version')).toBeTruthy()
  // expect(fn('test')).toBeTruthy()
  })

  it('ReadonlyKeysFor', () => {
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

    // expect(fn('name')).toBeTruthy()
    // expect(fn('age')).toBeTruthy()
    // expect(fn('version')).toBeTruthy()
    expect(fn('test')).toBeTruthy()
  })

  it('PickPublic', () => {
    const a: PickPublic<B> = {
      name: 'daniel',
      age: 1,
    }

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('PickWritable', () => {
    const a: PickWritable<WritableKeys<A, 'version'>> = {
      version: 1,
    }

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('PickReadonly', () => {
    const a: PickReadonly<ReadonlyKeys<A, 'version'>> = {
      version: 1,
    }

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('PickRequired', () => {
    const a: PickRequired<RequiredKeys<A, 'version'>> = {
      version: 1,
    }

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('PickNullable', () => {
    const a: PickNullable<NullableKeys<A, 'version'>> = {
      version: null,
    }

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })

  it('PickPartial', () => {
    const a: PickPartial<PartialKeys<A, 'version'>> = {
      version: void 0,
    }

    expect(guardFor(a, ...Object.keys(a) as (keyof typeof a)[])).toBeTruthy()
  })
})