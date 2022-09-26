// Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

/**
 * @module Assert
 */

import { FoundationError } from '@/error'

/**
 * The `AssertError` defines an error that arises when
 * a given assertion fails.
 */
export class AssertError extends FoundationError {}

/**
 * Asserts a given statement.
 */
export const assert = (statement: boolean, message: string): boolean | never => {
  if (statement) {
    return true
  }
  else {
    throw new AssertError(message)
  }
}
