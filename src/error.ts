/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

/**
 * @module Error
 */

export interface IFoundationError {
  /**
   * Fetches the `name` value for the class.
   */
  get name(): string

  /**
   * Fetches the `message` value for the class.
   */
  get message(): string
}

/**
 * The `FoundationError` is the base `Error` class. It is used
 * in non-specific situations. This is ideally used as a base
 * class to inherit from when making custom error types.
 */
export class FoundationError extends Error implements IFoundationError {
  get name(): string {
    return this.constructor.name
  }

  toString(): string {
    return `[${this.name} ${this.message}]`
  }
}

/**
 * The `FoundationTypeError` is the base `TypeError` class. It
 * is used in specific type error situations.
 */
export class FoundationTypeError extends TypeError implements IFoundationError {
  /**
   * Fetches the `name` value for the class.
   */
  get name(): string {
    return this.constructor.name
  }

  toString(): string {
    return `[${this.name} ${this.message}]`
  }
}
