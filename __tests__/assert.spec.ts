/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
  it,
  expect,
  describe,
} from 'vitest'

import { FoundationError } from '../src'

import {
  assert,
  AssertError,
} from '../src'

describe('Assert', () => {
  it('Assert: success', () => {
    expect(assert(true, 'not a number')).toBeTruthy()
  })

  it('Assert: error', t => {
    try {
      expect(assert(false, 'not a number')).toBeTruthy()
      expect(false).toBeTruthy()
    }
    catch (e) {
      expect(e instanceof FoundationError).toBeTruthy()
      expect(e instanceof AssertError).toBeTruthy()

      if (e instanceof AssertError) {
        expect(e.name).toBe('AssertError')
        expect(e.message).toBe('not a number')
      }
    }
  })
})
