// Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

/**
 * @module Guard
 */

/**
 * A guard statement. It is important to understand that
 * guards are somewhat a reverse logic, if it fails, it
 * returns `true`, in order to pass into a failure block.
 */
export const guard = (statement: boolean): boolean => !statement

/**
 * Checks if a model is a subtype or equal to `T`.
 */
export function guardFor<T, R extends T extends object ? Exclude<T, undefined | null> : never, K extends keyof R>(model: T, ...keys: K[]): model is R {
  if ('undefined' !== typeof model && null !== model as T) {
    for (const key of keys) {
      if (!(key in model)) {
        return false
      }
    }
    return true
  }
  return false
}