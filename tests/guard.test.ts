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
  guard,
  guardFor,
} from '../src/internal'

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

  t.true(guardFor<A>(a, 'name'))
  t.true(guardFor<A>(a, 'age'))
  t.true(guardFor<A>(a, 'name', 'age'))
  t.true(guardFor<A>(a, 'age', 'name'))

  t.true(guardFor<B>(b, 'name'))
  t.true(guardFor<B>(b, 'version'))
  t.true(guardFor<B>(b, 'name', 'version'))
  t.true(guardFor<B>(b, 'version', 'name'))

  t.true(guardFor<A>(c, 'name'))
  t.true(guardFor<A>(c, 'age'))
  t.true(guardFor<A>(c, 'name', 'age'))
  t.true(guardFor<A>(c, 'age', 'name'))
  t.true(guardFor<B>(c, 'name'))
  t.true(guardFor<B>(c, 'version'))
  t.true(guardFor<B>(c, 'name', 'version'))
  t.true(guardFor<B>(c, 'version', 'name'))
  t.true(guardFor<C>(c, 'name'))
  t.true(guardFor<C>(c, 'age'))
  t.true(guardFor<C>(c, 'name', 'age'))
  t.true(guardFor<C>(c, 'age', 'name'))
  t.true(guardFor<C>(c, 'name'))
  t.true(guardFor<C>(c, 'version'))
  t.true(guardFor<C>(c, 'name', 'version'))
  t.true(guardFor<C>(c, 'version', 'name'))
})
