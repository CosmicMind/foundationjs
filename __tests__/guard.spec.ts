/**
 * BSD 3-Clause License
 *
 * Copyright © 2023, Daniel Jonathan <daniel at cosmicmind dot com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
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

import {
  it,
  expect,
  describe,
} from 'vitest'

import {
  guard,
  guardIterator,
} from '@/index'

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

    expect(guard(a, 'name')).toBeTruthy()
    expect(guard(a, 'age')).toBeTruthy()
    expect(guard(a, 'name', 'age')).toBeTruthy()
    expect(guard(a, 'age', 'name')).toBeTruthy()

    expect(guard(b, 'name')).toBeTruthy()
    expect(guard(b, 'version')).toBeTruthy()
    expect(guard(b, 'name', 'version')).toBeTruthy()
    expect(guard(b, 'version', 'name')).toBeTruthy()

    expect(guard(c, 'name')).toBeTruthy()
    expect(guard(c, 'age')).toBeTruthy()
    expect(guard(c, 'name', 'age')).toBeTruthy()
    expect(guard(c, 'age', 'name')).toBeTruthy()
    expect(guard(c, 'name')).toBeTruthy()
    expect(guard(c, 'version')).toBeTruthy()
    expect(guard(c, 'name', 'version')).toBeTruthy()
    expect(guard(c, 'version', 'name')).toBeTruthy()
    expect(guard(c, 'age', 'name')).toBeTruthy()
    expect(guard(c, 'name')).toBeTruthy()
    expect(guard(c, 'version')).toBeTruthy()
    expect(guard(c, 'name', 'version')).toBeTruthy()
    expect(guard(c, 'version', 'name')).toBeTruthy()

    const name = 'name'
    const age = 38
    const version = 0
    const neg = -1
    const isTrue = true
    const isFalse = false
    const tricky1: boolean | undefined | null = true
    const tricky2: boolean | undefined | null = void 0
    const tricky3: boolean | undefined | null = null
    const tuple = [ null, 'hello world' ] as const
    const tupleEmpty = [] as const

    expect(guard(name)).toBeTruthy()
    expect(guard(age)).toBeTruthy()
    expect(guard(version)).toBeTruthy()
    expect(guard(neg)).toBeTruthy()
    expect(guard(isTrue)).toBeTruthy()
    expect(guard(isFalse)).toBeTruthy()
    expect(guard(tricky1)).toBeTruthy()
    expect(guard(tricky2)).toBeFalsy()
    expect(guard(tricky3)).toBeFalsy()
    expect(guard(tuple)).toBeTruthy()
    expect(guard(tupleEmpty)).toBeTruthy()
  })

  it('guardIterator', () => {
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

    expect(guardIterator(a, 'name')).toBeTruthy()
    expect(guardIterator(a, 'age')).toBeTruthy()
    expect(guardIterator(a, 'name', 'age')).toBeTruthy()
    expect(guardIterator(a, 'age', 'name')).toBeTruthy()

    expect(guardIterator(b, 'name')).toBeTruthy()
    expect(guardIterator(b, 'version')).toBeTruthy()
    expect(guardIterator(b, 'name', 'version')).toBeTruthy()
    expect(guardIterator(b, 'version', 'name')).toBeTruthy()

    expect(guardIterator(c, 'name')).toBeTruthy()
    expect(guardIterator(c, 'age')).toBeTruthy()
    expect(guardIterator(c, 'name', 'age')).toBeTruthy()
    expect(guardIterator(c, 'age', 'name')).toBeTruthy()
    expect(guardIterator(c, 'name')).toBeTruthy()
    expect(guardIterator(c, 'version')).toBeTruthy()
    expect(guardIterator(c, 'name', 'version')).toBeTruthy()
    expect(guardIterator(c, 'version', 'name')).toBeTruthy()
    expect(guardIterator(c, 'age', 'name')).toBeTruthy()
    expect(guardIterator(c, 'name')).toBeTruthy()
    expect(guardIterator(c, 'version')).toBeTruthy()
    expect(guardIterator(c, 'name', 'version')).toBeTruthy()
    expect(guardIterator(c, 'version', 'name')).toBeTruthy()

    const name = 'name'
    const age = 38
    const version = 0
    const neg = -1
    const isTrue = true
    const isFalse = false
    const tricky1: boolean | undefined | null = true
    const tricky2: boolean | undefined | null = void 0
    const tricky3: boolean | undefined | null = null
    const tuple = [ null, 'hello world' ] as const
    const tupleEmpty = [] as const

    expect(guardIterator(name)).toBeTruthy()
    expect(guardIterator(age)).toBeTruthy()
    expect(guardIterator(version)).toBeTruthy()
    expect(guardIterator(neg)).toBeTruthy()
    expect(guardIterator(isTrue)).toBeTruthy()
    expect(guardIterator(isFalse)).toBeTruthy()
    expect(guardIterator(tricky1)).toBeTruthy()
    expect(guardIterator(tricky2)).toBeFalsy()
    expect(guardIterator(tricky3)).toBeFalsy()
    expect(guardIterator(tuple)).toBeFalsy()
    expect(guardIterator(tupleEmpty)).toBeTruthy()
  })
})