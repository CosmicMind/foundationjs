/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import test from 'ava'

import {
  string,
  ValidationError,
} from 'yup'

import { uuidv4 } from '../src'

test('UUID: success', t => {
  const uuid = uuidv4()

  t.true('string' === typeof uuid)
  t.is(uuid.length, 36)
  t.is(uuid.replace(/-/g, '').length, 32)
  t.is(uuid, string().uuid().defined().strict(true).validateSync(uuid))
})

test('UUID: error', t => {
  const uuid = 'I-am-not-a-UUID'
  const errorMessage = 'uuid is invalid'

  t.is(uuid.length, 15)
  t.is(uuid.replace(/-/g, '').length, 11)

  try {
    t.false(string().uuid(errorMessage).defined().strict(true).validateSync(uuid))

    t.true(false)
  }
  catch (e) {
    t.true(e instanceof ValidationError)

    if (e instanceof ValidationError) {
      t.is(e.message, errorMessage)
    }
  }
})
