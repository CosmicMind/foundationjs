/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, Daniel Jonathan <daniel at cosmicmind dot com>
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
 * SERVICES LOSS OF USE, DATA, OR PROFITS OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @module Tools
 */

import JSON5 from 'json5'

/**
 * A helper function that queues a `microtask` queue. A clear method is
 * returned that can can cancel the async call.
 */
export const async = (fn: () => void, timeout = 1): () => void => {
  const id = setTimeout(fn, timeout)
  return (): void => clearTimeout(id)
}

/**
 * Deep clones the passed value using JSON stringify and parse methods.
 */
export const clone = <T extends object>(value: T): T =>
  JSON5.parse(JSON5.stringify(value)) as T

/**
 * Checks equality of two objects by comparing their JSON string.
 */
export const equals = <T extends object>(a: T, b: T): boolean =>
  JSON5.stringify(a) === JSON5.stringify(b)

/**
 * Filters the `Array` and returns only the unique values.
 */
export const unique = <T>(data: T[]): T[] =>
  [ ...new Set(data) ]

/**
 * Define a new `assign` function that works like
 * Object.assign() except that it copies property descriptors from
 * source objects into the target object instead of just copying
 * property values. This function copies all own properties, both
 * enumerable and non-enumerable. And because it copies descriptors,
 * it copies getter functions from source objects and overwrites setter
 * functions in the target object rather than invoking those getters and
 * setters.
 *
 * `assign` propagates any TypeErrors thrown by
 * Object.defineProperty(). This can occur if the target object is sealed
 * or frozen or if any of the source properties try to change an existing
 * non-configurable property on the target object.
 *
 * Note that the assign property is added to Object with
 * Object.defineProperty() so that the new function can be created as
 * a non-enumerable property like Object.assign().
 */
export const assign = <T, U>(target: T, ...sources: U[]): T => {
  for (const source of sources) {
    for (const name of Object.getOwnPropertyNames(source)) {
      const desc = Object.getOwnPropertyDescriptor(source, name)
      if ('undefined' !== typeof desc) {
        Object.defineProperty(target, name, desc)
      }
    }
    for (const symbol of Object.getOwnPropertySymbols(source)) {
      const desc = Object.getOwnPropertyDescriptor(source, symbol)
      if ('undefined' !== typeof desc) {
        Object.defineProperty(target, symbol, desc)
      }
    }
  }
  return target
}

/**
 * Swap the values from a `source` object to a `target` object. The `target`
 * values are updated. The values swapped out from the `target` are returned.
 */
export const swapProps = <T>(source: T, target: typeof source): T => {
  const swapped = {} as T

  for (const key in source) {
    swapped[key] = target[key]
    target[key] = source[key]
  }

  return swapped
}