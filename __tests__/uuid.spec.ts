/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
  it,
  expect,
  describe,
} from 'vitest'

import {
  string,
  ValidationError,
} from 'yup'

import { uuidv4 } from '../src'

describe('UUID', () => {
  it('success', () => {
    const uuid = uuidv4()

    expect('string' === typeof uuid)
    expect(uuid.length).toBe(36)
    expect(uuid.replace(/-/g, '').length).toBe(32)
    expect(uuid, string().uuid().defined().strict(true).validateSync(uuid))
  })

  it('error', () => {
    const uuid = 'I-am-not-a-UUID'
    const errorMessage = 'uuid is invalid'

    expect(uuid.length).toBe(15)
    expect(uuid.replace(/-/g, '').length).toBe(11)

    try {
      expect(string().uuid(errorMessage).defined().strict(true).validateSync(uuid)).toBeFalsy()
      expect(false).toBeTruthy()
    }
    catch (e) {
      expect(e instanceof ValidationError).toBeTruthy()

      if (e instanceof ValidationError) {
        expect(e.message).toBe(errorMessage)
      }
    }
  })
})