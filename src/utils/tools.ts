/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, Daniel Jonathan <daniel at cosmicverse dot com>
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

import { Optional } from './type-defs'

/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @param {Optional<unknown>} value
 * @param {Optional<(this: unknown, key: string, value: unknown) => Optional<string>>} replacer
 * @param {Optional<string | number>} space
 * @returns {Optional<string>}
 */
export const stringify = (value: Optional<unknown>, replacer?: (this: unknown, key: string, value: unknown) => unknown, space?: string | number): Optional<string> =>
  'undefined' === typeof value ? undefined : JSON.stringify(value, replacer, space)

/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 *
 * @param {Optional<string>} text
 * @param {Optional<(this: unknown, key: string, value: unknown) => unknown>} reviver
 * @returns {Optional<object>}
 */
export const parse = (text: Optional<string>, reviver?: (this: unknown, key: string, value: unknown) => unknown): Optional<object> =>
  'undefined' === typeof text ? undefined : JSON.parse(text, reviver)

/**
 * A helper function that returns a promise and creates an `async` block.
 *
 * @param {function(): unknown} fn
 * @param {number} timeout
 * @returns {Promise<unknown>}
 */
export const async = (fn: () => unknown, timeout = 0): Promise<unknown> =>
  new Promise((resolve, reject): void => {
    setTimeout((): void => {
      try { resolve(fn() || true) }
      catch (e) { reject(e) }
    }, timeout)
  })

/**
 * Deep clones the passed value using JSON stringify and parse methods.
 *
 * @param {Optional<object>} value
 * @returns {Optional<object>}
 */
export const clone = (value: Optional<object>): Optional<object> => parse(stringify(value))

/**
 * Condenses sequential space characters to a single space
 * that wraps the character string.
 *
 * @param {string} c
 * @returns {string}
 */
export const normalizeOuterSpace = (c: string): string =>
  c && c.replace ? c.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ') : c

/**
 * Condenses sequential space characters to a single space
 * that is within the character string.
 *
 * @param {string} c
 * @returns {string}
 */
export const normalizeInnerSpace = (c: string): string =>
  c && c.replace ? c.replace(/^\s+|\s+$/g, ' ') : c

/**
 * Capitalizes the character string.
 *
 * @param {string} c
 * @returns {string}
 */
export const toCapitalize = (c: string): string =>
  c.replace ? c.replace(/(?:^|\s)\S/g, function(value) {
    return value.toUpperCase().replace(/([-_])/g, '')
  }) : c

/**
 * Converts the character string to camel case.
 *
 * @param {string} c
 * @returns {string}
 */
export const toCamelCase = (c: string): string =>
  c.replace ? c.replace(/([-_])+([a-zA-Z])/g, function(value) {
    return value.toUpperCase().replace(/([-_])/g, '')
  }) : c

/**
 * Converts the character string to a kebab-case.
 *
 * @param {string} c
 * @returns {string}
 */
export const toKebabCase = (c: string): string =>
  c.replace ? c.replace(/( |-|_|[A-Z])+([a-zA-Z])/g, function(value) {
    return (c.indexOf(value) > 0 ? '-' : '') + value.replace(/([ -_])/g, '')
  }).toLowerCase() : c

/**
 * Converts the character string to snake case.
 *
 * @param {string} c
 * @returns {string}
 */
export const toSnakeCase = (c: string): string =>
  c.replace ? c.replace(/( |-|_|[A-Z])+([a-zA-Z])/g, function(value) {
    return (c.indexOf(value) > 0 ? '_' : '') + value.replace(/([ -_])/g, '')
  }).toLowerCase() : c
/**
 * Checks equality of two objects by comparing their JSON string.
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {boolean}
 */
export const equals = (a: object, b: object): boolean => stringify(a) === stringify(b)

/**
 * Filters the `Array` and returns only the unique values.
 *
 * @param {Optional<unknown>[]}data
 * @returns {Optional<unknown>[]}
 */
export const unique = (data: Optional<unknown>[]): Optional<unknown>[] => [ ...new Set(data) ]

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
 *
 * @param {object} target
 * @param {...object} sources
 * @returns {object}
 */
export const assign = (target: object, ...sources: object[]): object => {
  for(const source of sources) {
    for(const name of Object.getOwnPropertyNames(source)) {
      const desc = Object.getOwnPropertyDescriptor(source, name)
      if ('undefined' !== typeof desc) {
        Object.defineProperty(target, name, desc)
      }
    }

    for(const symbol of Object.getOwnPropertySymbols(source)) {
      const desc = Object.getOwnPropertyDescriptor(source, symbol)
      if ('undefined' !== typeof desc) {
        Object.defineProperty(target, symbol, desc)
      }
    }
  }

  return target
}
