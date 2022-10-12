/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
  it,
  expect,
  describe,
} from 'vitest'

import {
  guard,
  guardFor,
} from '../src'

type A = {
  name: string
  age: number
}

type B = {
  name: string
  version: number
}

type C = A & B

describe('Guard', () => {
  it('guard', () => {
    expect(guard(true))
    expect(guard(false))
  })

  it('guardFor', () => {
    const a: A = {
      name: 'person',
      age: 38,
    }

    const b: B = {
      name: 'token',
      version: 1,
    }

    const c: C = {
      name: 'event',
      age: 38,
      version: 1,
    }

    expect(guardFor(a, 'name')).toBeTruthy()
    expect(guardFor(a, 'age')).toBeTruthy()
    expect(guardFor(a, 'name', 'age')).toBeTruthy()
    expect(guardFor(a, 'age', 'name')).toBeTruthy()

    expect(guardFor(b, 'name')).toBeTruthy()
    expect(guardFor(b, 'version')).toBeTruthy()
    expect(guardFor(b, 'name', 'version')).toBeTruthy()
    expect(guardFor(b, 'version', 'name')).toBeTruthy()

    expect(guardFor(c, 'name')).toBeTruthy()
    expect(guardFor(c, 'age')).toBeTruthy()
    expect(guardFor(c, 'name', 'age')).toBeTruthy()
    expect(guardFor(c, 'age', 'name')).toBeTruthy()
    expect(guardFor(c, 'name')).toBeTruthy()
    expect(guardFor(c, 'version')).toBeTruthy()
    expect(guardFor(c, 'name', 'version')).toBeTruthy()
    expect(guardFor(c, 'version', 'name')).toBeTruthy()
    expect(guardFor(c, 'name')).toBeTruthy()
    expect(guardFor(c, 'age')).toBeTruthy()
    expect(guardFor(c, 'name', 'age')).toBeTruthy()
    expect(guardFor(c, 'age', 'name')).toBeTruthy()
    expect(guardFor(c, 'name')).toBeTruthy()
    expect(guardFor(c, 'version')).toBeTruthy()
    expect(guardFor(c, 'name', 'version')).toBeTruthy()
    expect(guardFor(c, 'version', 'name')).toBeTruthy()

    const name = 'daniel'
    const age = 38
    const version = 0
    const neg = -1
    const isTrue = true
    const isFalse = false
    const tricky1: boolean | undefined | null = true
    const tricky2: boolean | undefined | null = void 0
    const tricky3: boolean | undefined | null = null

    expect(guardFor(name)).toBeTruthy()
    expect(guardFor(age)).toBeTruthy()
    expect(guardFor(version)).toBeTruthy()
    expect(guardFor(neg)).toBeTruthy()
    expect(guardFor(isTrue)).toBeTruthy()
    expect(guardFor(isFalse)).toBeTruthy()
    expect(guardFor(tricky1)).toBeTruthy()
    expect(guardFor(tricky2)).toBeFalsy()
    expect(guardFor(tricky3)).toBeFalsy()
  })
})