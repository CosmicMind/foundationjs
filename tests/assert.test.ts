/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import test from 'ava'

import { FoundationError } from '../src'

import {
  assert,
  AssertError,
} from '../src'

test('Assert: success', t => {
  t.true(assert(true, 'not a number'))
})

test('Assert: error', t => {
  try {
    t.true(assert(false, 'not a number'))
    t.true(false)
  }
  catch (e) {
    t.true(e instanceof FoundationError)
    t.true(e instanceof AssertError)

    if (e instanceof AssertError) {
      t.is(e.name, 'AssertError')
      t.is(e.message, 'not a number')
    }
  }
})
