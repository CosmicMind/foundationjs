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
 * @module Observable
 */

import { async } from '@/utils/tools'
import { Optional } from '@/utils/type-defs'

/**
 * A `type` definition for listener callbacks used
 * within the `Observable` class.
 *
 * @type {(...args: any[]) => void}
 */
export type ObservableCallback = (...args: unknown[]) => void

/**
 * The `Observable` class is a vanilla implementation of an
 * `event emitter` for observing messages.
 */
export class Observable {
  /**
   * A reference to the scoped based events.
   *
   * @type {Map<string, Set<ObservableCallback>>()}
   */
  private _events: Map<string, Set<ObservableCallback>>

  /**
   * @constructor
   */
  constructor() {
    this._events = new Map()
  }

  /**
   * The `on` method adds new listeners to the `event set`,
   * for the given `event`.
   *
   * @param {string} event
   * @param {...ObservableCallback} f
   */
  on(event: string, ...f: ObservableCallback[]) {
    const s = this._events.get(event) || new Set<ObservableCallback>()
    for (const x of f) s.add(x)
    this._events.set(event, s)
  }

  /**
   * The `off` method remove listeners from the `event set`,
   * for the given `event`.
   *
   * @param {string} event
   * @param {...ObservableCallback} f
   */
  off(event: string, ...f: ObservableCallback[]) {
    const s: Optional<Set<ObservableCallback>> = this._events.get(event)
    if ('undefined' !== typeof s) {
      for (const x of f) s.delete(x)
      this._events.set(event, s)
    }
  }

  /**
   * The `emitAsync` method emits the given `event` to the `event listeners` asynchronously.
   *
   * @param {string} event
   * @param {...unknown} args
   */
  emitAsync(event: string, ...args: unknown[]): Promise<unknown> {
    return async((): void => {
      const f = this._events.get(event)
      if (f instanceof Set) for (const x of f) x(...args)
    })
  }

  /**
   * The `emitSync` method emits the given `event` to the `event listeners` synchronously.
   *
   * @param {string} event
   * @param {...unknown} args
   */
  emitSync(event: string, ...args: unknown[]) {
    const f = this._events.get(event)
    if (f instanceof Set) for (const x of f) x(...args)
  }

  /**
   * The `once` method calls an event only once with the given `event listeners`.
   *
   * @param {string} event
   * @param {...ObservableCallback} f
   */
  once(event: string, ...f: ObservableCallback[]) {
    const _f = (...args: unknown[]): void => {
      this.off(event, _f)
      for (const x of f) x(...args)
    }
    this.on(event, _f)
  }
}
