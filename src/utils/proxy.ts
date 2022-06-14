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

/**
 * @module Proxy
 *
 * The `Proxy` module is responsible for generating instances
 * that adhere to the `ProxySchema` interface. It simplifies
 * the immutability, mutability, and virtualization of
 * properties that define the structure of the class.
 */

import { BaseSchema } from 'yup'

import { Optional } from './type-defs'

import {
  FoundationError,
  FoundationTypeError,
} from './error'

/**
 * @extends {FoundationTypeError}
 *
 * The `ProxyTypeError` defines an error that arises when
 * a given property value doesn't pass validation checks
 * for a given property key.
 */
export class ProxyTypeError extends FoundationTypeError {}

/**
 * @extends {FoundationError}
 *
 * The `ProxyNotDefinedError` defines an error that arises
 * when a given property value is not part of the schema.
 */
export class ProxyNotDefinedError extends FoundationError {}

/**
 * @extends {FoundationError}
 *
 * The `ProxyImmutableError` defines an error that arises when
 * immutable property values are either invalid or trying to
 * be set after construction.
 */
export class ProxyImmutableError extends FoundationError {}

/**
 * @extends {FoundationError}
 *
 * The `ProxyMutableError` defines an error that arises when
 * mutable property values either invalid.
 */
export class ProxyMutableError extends FoundationError {}

/**
 * @extends {FoundationError}
 *
 * The `ProxyVirtualError` defines an error that arises when
 * a given property value doesn't pass validation checks
 * for a given property key.
 */
export class ProxyVirtualError extends FoundationError {}

/**
 * The `ProxyPropertyKey` type defines the passable values as
 * property keys to the `ProxyHandler`.
 */
export type ProxyPropertyKey = string | symbol

/**
 * The `ProxyValidator` defines the validation schema used
 * when engaging immutable and mutable properties.
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
export interface ProxyVirtual {
  [key: string]: Optional<unknown>
}

/**
 * The `ProxySchema` type defines the structure of
 * the immutable, mutable, and virtual property definitions.
 */
export interface ProxySchema {
  immutable: ProxyImmutable
  mutable: ProxyMutable
  virtual: ProxyVirtual
}

/**
 * The `createProxyHandlerForSchema` function takes in the given
 * `ProxySchema` and returns the `ProxyHandler` used to interface
 * with the given `Class`.
 */
export const createProxyHandlerForSchema = <T extends object>({
  immutable,
  mutable,
  virtual,
}: ProxySchema): ProxyHandler<T> => ({
  /**
   * The `has` checks whether a value exists in the
   * `ProxySchema` definition, or in the instance itself.
   * The search is ordered as: immutable, mutable, virtual,
   * and then instance.
   */
    has(target: T, p: ProxyPropertyKey): boolean {
      return p in immutable || p in mutable || p in virtual || Reflect.has(target, p)
    },

  /**
   * The `get` fetches the property value for the give property
   * key. The search is ordered as: immutable, mutable, virtual,
   * and then instance.
   */
    get(target: T, p: ProxyPropertyKey, receiver: unknown): unknown {
      if (p in immutable) {
        return Reflect.get(target, p, receiver)
      }
      if (p in mutable) {
        return Reflect.get(target, p, receiver)
      }
      if (p in virtual) {
        return Reflect.get(virtual, p, receiver)
      }
      return Reflect.get(target, p, receiver)
    },

   /**
    * The `set` updates the given property with the given value.
    * The property key and value are checked against the
    * `ProxySchema`. The search is ordered as: immutable, virtual,
    * and then mutable.
    */
    set(target: T, p: ProxyPropertyKey, value: unknown, receiver: unknown): boolean {
      if (p in immutable) {
        throw new ProxyImmutableError(`property (${String(p)}) is immutable`)
      }
      else if (p in virtual) {
        throw new ProxyVirtualError(`property (${String(p)}) is virtual`)
      }
      else if (p in mutable) {
        try {
          mutable[String(p)].validateSync(value)
        }
        catch (e) {
          if (e instanceof Error) {
            throw new ProxyTypeError(e.message)
          }
        }
      }
      else {
        throw new ProxyNotDefinedError(`property (${String(p)}) is not defined`)
      }
      return Reflect.set(target, p, value, receiver)
    },

    /**
   * The `deleteProperty` deletes the given property so long as
   * the property is not defined in the `ProxySchema`. The
   * search is ordered as: immutable, mutable, and then virtual.
   */
    deleteProperty(target: T, p: ProxyPropertyKey): boolean {
      if (p in immutable) {
        throw new ProxyImmutableError(`property (${String(p)}) is immutable`)
      }
      if (p in mutable) {
        throw new ProxyMutableError(`property (${String(p)}) is mutable`)
      }
      if (p in virtual) {
        throw new ProxyVirtualError(`property (${String(p)}) is virtual`)
      }
      return Reflect.deleteProperty(target, p)
    },
  })

/**
 * The `generateProxySchemaFor` function takes a given `schema`
 * and validates the given `target` against it. If all is
 * successful, then the complete `ProxySchema` definition is
 * returned.
 */
const generateProxySchemaFor = <T extends object>({
  immutable,
  mutable,
  virtual,
}: Partial<ProxySchema>, target: T): ProxySchema => {
  const immut = 'object' === typeof immutable ? immutable : {}
  const mut = 'object' === typeof mutable ? mutable : {}
  const virt = 'object' === typeof virtual ? virtual : {}

  for (const [ p, v ] of Object.entries(target)) {
    if (p in immut) {
      try {
        immut[p].validateSync(v)
      }
      catch (e) {
        if (e instanceof Error) {
          throw new ProxyTypeError(e.message)
        }
      }
    }
    else if (p in mut) {
      try {
        mut[p].validateSync(v)
      }
      catch (e) {
        if (e instanceof Error) {
          throw new ProxyTypeError(e.message)
        }
      }
    }
    else if (p in virt) {
      throw new ProxyVirtualError(`property (${String(p)}) is virtual`)
    }
    else {
      throw new ProxyNotDefinedError(`property (${String(p)}) is not defined`)
    }
  }

  return {
    immutable: immut,
    mutable: mut,
    virtual: virt,
  }
}

/**
 * The `createProxyFor` function takes a given `schema` and create
 * a new Proxy instance for the given `target`.
 */
export const createProxyFor = <T extends object>(schema: Partial<ProxySchema>, target: T): T =>
  new Proxy<T>(target, createProxyHandlerForSchema(generateProxySchemaFor(schema, target)) as ProxyHandler<T>)
