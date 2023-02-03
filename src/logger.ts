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

/* eslint no-console: 0 */  // --> OFF

/**
 * @module Logger
 */
const assert = (condition: boolean, data: string): void => console.assert(condition, data)
const clear = (): void => console.clear()
const count = (label?: string): void => console.count(label)
const countReset = (label?: string): void => console.countReset(label)
const debug = (...data: unknown[]): void => console.debug(...data)
const error = (...data: unknown[]): void => console.error(...data)
const info = (...data: unknown[]): void => console.info(...data)
const log = (...data: unknown[]): void => console.log(...data)
const time = (label?: string): void => console.time(label)
const timeEnd = (label?: string): void => console.timeEnd(label)
const timeLog = (label?: string, ...data: unknown[]): void => console.timeLog(label, data)
const timeStamp = (label?: string): void => console.timeStamp(label)
const trace = (...data: unknown[]): void => console.log(...data)
const warn = (...data: unknown[]): void => console.warn(...data)

export const logger = {
  assert,
  clear,
  count,
  countReset,
  debug,
  error,
  info,
  log,
  time,
  timeEnd,
  timeLog,
  timeStamp,
  trace,
  warn,
}
