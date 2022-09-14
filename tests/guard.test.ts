// Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import test from 'ava'

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

test('Guard: guard', t => {
  t.false(guard(true))
  t.true(guard(false))
})

test('Guard: guardFor', t => {
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

  t.true(guardFor(a, 'name'))
  t.true(guardFor(a, 'age'))
  t.true(guardFor(a, 'name', 'age'))
  t.true(guardFor(a, 'age', 'name'))

  t.true(guardFor(b, 'name'))
  t.true(guardFor(b, 'version'))
  t.true(guardFor(b, 'name', 'version'))
  t.true(guardFor(b, 'version', 'name'))

  t.true(guardFor(c, 'name'))
  t.true(guardFor(c, 'age'))
  t.true(guardFor(c, 'name', 'age'))
  t.true(guardFor(c, 'age', 'name'))
  t.true(guardFor(c, 'name'))
  t.true(guardFor(c, 'version'))
  t.true(guardFor(c, 'name', 'version'))
  t.true(guardFor(c, 'version', 'name'))
  t.true(guardFor(c, 'name'))
  t.true(guardFor(c, 'age'))
  t.true(guardFor(c, 'name', 'age'))
  t.true(guardFor(c, 'age', 'name'))
  t.true(guardFor(c, 'name'))
  t.true(guardFor(c, 'version'))
  t.true(guardFor(c, 'name', 'version'))
  t.true(guardFor(c, 'version', 'name'))

  const name = 'daniel'
  const age = 38
  const version = 0
  const neg = -1
  const isTrue = true
  const isFalse = false
  const tricky1: boolean | undefined | null = true
  const tricky2: boolean | undefined | null = void 0
  const tricky3: boolean | undefined | null = null

  t.true(guardFor(name))
  t.true(guardFor(age))
  t.true(guardFor(version))
  t.true(guardFor(neg))
  t.true(guardFor(isTrue))
  t.true(guardFor(isFalse))
  t.true(guardFor(tricky1))
  t.false(guardFor(tricky2))
  t.false(guardFor(tricky3))
})
