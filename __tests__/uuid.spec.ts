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
  string,
  ValidationError,
} from 'yup'

import {
  uuidv4,
} from '@/'

describe('UUID', () => {
  it('success', () => {
    const uuid = uuidv4()

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