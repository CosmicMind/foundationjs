// Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 */
export const stringify = <T extends object>(value: T, replacer?: (this: unknown, key: string, value: unknown) => unknown, space?: string | number): string =>
  JSON.stringify(value, replacer, space)

/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 */
export const parse = <T extends string>(text: T, reviver?: (this: unknown, key: string, value: unknown) => unknown): object =>
  JSON.parse(text, reviver)

/**
 * A helper function that returns a promise and creates an `async` block.
 */
export const async = <T>(fn: () => T | never, timeout = 1): Promise<T> =>
  new Promise((resolve, reject): void => {
    setTimeout((): void => {
      try {
        resolve(fn())
      }
      catch (e) {
        reject(e)
      }
    }, timeout)
  })

/**
 * Deep clones the passed value using JSON stringify and parse methods.
 */
export const clone = <T extends object>(value: T): T =>
  parse(stringify(value)) as T

/**
 * Checks equality of two objects by comparing their JSON string.
 */
export const equals = <T extends object>(a: T, b: T): boolean =>
  stringify(a) === stringify(b)

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
 * value is updated, and the `source` is left as is.
 */
export const swapProps = <T>(source: T, target: typeof source): typeof source => {
  const swapped = {} as T

  for (const key in source) {
    swapped[key] = target[key]
    target[key] = source[key]
  }

  return swapped
}