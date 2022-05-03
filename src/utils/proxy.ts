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
 * @module Proxy
 *
 * The `Proxy` module is responsible for generating instances
 * that adhere to the `ProxySchema` interface. It simplifies
 * the immutability, mutability, and virtualization of
 * properties that define the structure of the class.
 */

import { BaseSchema } from 'yup'

import {
  FoundationError,
  FoundationTypeError,
} from '@cosmicverse/foundation'

/**
 * @extends {FoundationTypeError}
 *
 * The `ProxyTypeError` defines an error that arises when
 * a given property value doesn't pass validation checks
 * for a given property key.
 */
export class ProxyTypeError extends FoundationTypeError {
  /**
   * Fetches the `name` value for the class.
   *
   * @type {Readonly<string>}
   */
  get name(): Readonly<string> {
    return super.name
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
  constructor(message: string) {
    super(message)
  }
}

/**
 * @extends {FoundationError}
 *
 * The `ProxyNotDefinedError` defines an error that arises
 * when a given property value is not part of the schema.
 */
export class ProxyNotDefinedError extends FoundationError {
  /**
   * Fetches the `name` value for the class.
   *
   * @type {Readonly<string>}
   */
  get name(): Readonly<string> {
    return super.name
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
  constructor(message: string) {
    super(message)
  }
}

/**
 * @extends {FoundationError}
 *
 * The `ProxyImmutableError` defines an error that arises when
 * immutable property values are either invalid or tyring to
 * be set after construction.
 */
export class ProxyImmutableError extends FoundationError {
  /**
   * Fetches the `name` value for the class.
   *
   * @type {Readonly<string>}
   */
  get name(): Readonly<string> {
    return super.name
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
  constructor(message: string) {
    super(message)
  }
}

/**
 * @extends {FoundationError}
 *
 * The `ProxyMutableError` defines an error that arises when
 * mutable property values either invalid.
 */
export class ProxyMutableError extends FoundationError {
  /**
   * Fetches the `name` value for the class.
   *
   * @type {Readonly<string>}
   */
  get name(): Readonly<string> {
    return super.name
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
  constructor(message: string) {
    super(message)
  }
}

/**
 * @extends {FoundationError}
 *
 * The `ProxyVirtualError` defines an error that arises when
 * a given property value doesn't pass validation checks
 * for a given property key.
 */
export class ProxyVirtualError extends FoundationError {
  /**
   * Fetches the `name` value for the class.
   *
   * @type {Readonly<string>}
   */
  get name(): Readonly<string> {
    return super.name
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
  constructor(message: string) {
    super(message)
  }
}

/**
 * The `ProxyPropertyKey` type defines the passable values as
 * property keys to the `ProxyHandler`.
 *
 * @type {string | Symbol}
 */
export type ProxyPropertyKey = string | symbol

/**
 * The `ProxyValidator` defines the validation schema used
 * when engaging immutable and mutable properties.
 *
 * @type {BaseSchema}
 */
export type ProxyValidator = BaseSchema

/**
 * The `ProxyImmutable` type is used to define immutable
 * property keys for the `ProxySchema`.
 */
export interface ProxyImmutable {
  [key: ProxyPropertyKey]: ProxyValidator
}

/**
 * The `ProxyMutable` type is used to define mutable
 * property keys for the `ProxySchema`.
 */
export interface ProxyMutable {
  [key: ProxyPropertyKey]: ProxyValidator
}

/**
 * The `ProxyMutable` type is used to define mutable
 * property keys for the `ProxySchema`.
 */
export interface ProxyVirtual { [key: string]: unknown }

/**
 * The `ProxySchema` type defines the structure of
 * the immutable, mutable, and virtual property definitions.
 *
 * @property {ProxyImmutable} immutable
 * @property {ProxyMutable} mutable
 * @property {ProxyVirtual} virtual
 */
export interface ProxySchema {
  immutable: ProxyImmutable
  mutable: ProxyMutable
  virtual: ProxyVirtual
}

/**
 * @template TProxyTarget
 *
 * The `createProxyHandlerForSchema` function takes in the given
 * `ProxySchema` and returns the `ProxyHandler` used to interface
 * with the given `Class`.
 *
 *
 * @param {ProxyImmutable} immutable
 * @param {ProxyMutable} mutable
 * @param {ProxyVirtual} virtual
 * @returns {ProxyHandler<TProxyTarget>}
 */
export const createProxyHandlerForSchema = <TProxyTarget extends { new (): TProxyTarget }>({ immutable, mutable, virtual }: ProxySchema): ProxyHandler<TProxyTarget> => ({
  /**
   * @template TProxyTarget
   *
   * @constructor
   *
   * @param {TProxyTarget} target
   * @param {unknown[]} argArray
   * @param {() => void} newTarget
   * @returns {object}
   */
  construct(target: TProxyTarget, argArray: unknown[], newTarget: () => void): object {
    return Reflect.construct(target, argArray, newTarget)
  },

  /**
   * @template TProxyTarget
   *
   * The `has` checks whether a value exists in the
   * `ProxySchema` definition, or in the instance itself.
   * The search is ordered as: immutable, mutable, virtual,
   * and then instance.
   *
   * @param {TProxyTarget} target
   * @param {ProxyPropertyKey} p
   * @returns {boolean}
   */
  has(target: TProxyTarget, p: ProxyPropertyKey): boolean {
    return p in immutable || p in mutable || p in virtual || Reflect.has(target, p)
  },

  /**
   * @template TProxyTarget
   *
   * The `get` fetches the property value for the give property
   * key. The search is ordered as: immutable, mutable, virtual,
   * and then instance.
   *
   * @param {TProxyTarget} target
   * @param {ProxyPropertyKey} p
   * @param {unknown} receiver
   * @returns {unknown}
   */
  get(target: TProxyTarget, p: ProxyPropertyKey, receiver: unknown): unknown {
    if (p in immutable) return Reflect.get(target, p, receiver)
    if (p in mutable) return Reflect.get(target, p, receiver)
    if (p in virtual) return Reflect.get(virtual, p, receiver)
    return Reflect.get(target, p, receiver)
  },

  /**
   * @template TProxyTarget
   * @throws {ProxyImmutableError, ProxyMutableError, ProxyVirtualError, ProxyTypeError, ProxyNotDefinedError}
   *
   * The `set` updates the given property with the given value.
   * The property key and value are checked against the
   * `ProxySchema`. The search is ordered as: immutable, virtual,
   * and then mutable.
   *
   * @param {TProxyTarget} target
   * @param {ProxyPropertyKey} p
   * @param {any} value
   * @param {any} receiver
   * @returns {boolean}
   */
  set(target: TProxyTarget, p: ProxyPropertyKey, value: unknown, receiver: unknown): boolean {
    if (p in immutable) throw new ProxyImmutableError(`property (${String(p)}) is immutable`)
    else if (p in virtual) throw new ProxyVirtualError(`property (${String(p)}) is virtual`)
    else if (p in mutable) try { mutable[String(p)].validateSync(value) } catch(e) { throw new ProxyTypeError(e.message) }
    else throw new ProxyNotDefinedError(`property (${String(p)}) is not defined`)
    return Reflect.set(target, p, value, receiver)
  },

  /**
   * @template TProxyTarget
   * @throws {ProxyImmutableError, ProxyMutableError, ProxyVirtualError}
   *
   * The `deleteProperty` deletes the given property so long as
   * the property is not defined in the `ProxySchema`. The
   * search is ordered as: immutable, mutable, and then virtual.
   *
   * @param {TProxyTarget} target
   * @param {ProxyPropertyKey} p
   */
  deleteProperty(target: TProxyTarget, p: ProxyPropertyKey): boolean {
    if (p in immutable) throw new ProxyImmutableError(`property (${String(p)}) is immutable`)
    if (p in mutable) throw new ProxyMutableError(`property (${String(p)}) is mutable`)
    if (p in virtual) throw new ProxyVirtualError(`property (${String(p)}) is virtual`)
    return Reflect.deleteProperty(target, p)
  },
})

/**
 * @template TProxyTarget
 *
 * The `createProxyFor` function takes a given `schema` and create
 * a new Proxy instance for the given `target`.
 *
 * @param {Partial<ProxySchema>} schema
 * @param {TProxyTarget} target
 * @returns {TProxyTarget}
 */
export const createProxyFor = <TProxyTarget extends { new (): TProxyTarget }>(schema: Partial<ProxySchema>, target: TProxyTarget): TProxyTarget =>
  new Proxy<TProxyTarget>(target, createProxyHandlerForSchema<TProxyTarget>(generateProxySchemaFor(schema, target)))

/**
 * @template TProxyTarget
 * @throws {ProxyTypeError, ProxyVirtualError, ProxyNotDefinedError}
 *
 * The `generateProxySchemaFor` function takes a given `schema`
 * and validates the given `target` against it. If all is
 * successful, then the complete `ProxySchema` definition is
 * returned.
 *
 * @param {Partial<ProxySchema>} schema
 * @param {TProxyTarget} target
 * @returns {ProxySchema}
 */
const generateProxySchemaFor = <TProxyTarget extends { new (): TProxyTarget }>({ immutable, mutable, virtual }: Partial<ProxySchema>, target: TProxyTarget): ProxySchema => {
  if ('object' !== typeof immutable) immutable = {}
  if ('object' !== typeof mutable) mutable = {}
  if ('object' !== typeof virtual) virtual = {}

  for (const [ p, v ] of Object.entries(target)) {
    if (p in immutable) try { immutable[p].validateSync(v) } catch(e) {  throw new ProxyTypeError(e.message) }
    else if (p in mutable) try { mutable[p].validateSync(v) } catch(e) { throw new ProxyTypeError(e.message) }
    else if (p in virtual) throw new ProxyVirtualError(`property (${String(p)}) is virtual`)
    else throw new ProxyNotDefinedError(`property (${String(p)}) is not defined`)
  }

  return {
    immutable,
    mutable,
    virtual,
  }
}