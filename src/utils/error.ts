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

/**
 * @module Error
 */

export interface IFoundationError {
  /**
   * Fetches the `name` value for the class.
   *
   * @type {Readonly<string>}
   */
  get name(): Readonly<string>

  /**
   * Fetches the `message` value for the class.
   *
   * @type {Readonly<string>}
   */
  get message(): Readonly<string>
}

/**
 * @abstract
 * @extends {Error}
 * @implements {IFoundationError}
 *
 * The `FoundationError` is the base `Error` class. It is used
 * in non-specific situations. This is ideally used as a base
 * class to inherit from when making custom error types.
 */
export abstract class FoundationError extends Error implements IFoundationError {
  /**
   * Fetches the `name` value for the class.
   *
   * @type {Readonly<string>}
   */
  get name(): Readonly<string> {
    return this.constructor.name
  }

  /**
   * Fetches the `message` value for the class.
   *
   * @type {Readonly<string>}
   */
  get message(): Readonly<string> {
    return super.message
  }

  /**
   * @constructor
   *
   * @param {string} message
   */
  protected constructor(message: string) {
    super(message)
  }
}

/**
 * @abstract
 * @extends {TypeError}
 * @implements {IFoundationError}
 *
 * The `FoundationTypeError` is the base `TypeError` class. It
 * is used in specific type error situations.
 *
 * @property {Readonly<string>} name
 * @property {string} message
 */
export abstract class FoundationTypeError extends TypeError implements IFoundationError {
  /**
   * Fetches the `name` value for the class.
   *
   * @type {string}
   */
  get name(): Readonly<string> {
    return this.constructor.name
  }

  /**
   * Fetches the `message` value for the class.
   *
   * @type {Readonly<string>}
   */
  get message(): Readonly<string> {
    return super.message
  }

  /**
   * @constructor
   *
   * @param {string} message
   */
  protected constructor(message: string) {
    super(message)
  }
}