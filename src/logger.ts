/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

/* eslint no-console: 0 */  // --> OFF

const assert = (condition?: boolean, ...data: unknown[]): void => console.assert(condition, data)
const clear = (): void => console.clear()
const count = (label?: string): void => console.count(label)
const countReset = (label?: string): void => console.countReset(label)
const debug = (...data: unknown[]): void => console.debug(...data)
const dir = (item?: unknown, options?: unknown): void => console.dir(item, options)
const dirxml = (...data: unknown[]): void => console.dirxml(...data)
const error = (...data: unknown[]): void => console.error(...data)
const group = (...data: unknown[]): void => console.group(...data)
const groupCollapsed = (...data: unknown[]): void => console.groupCollapsed(...data)
const groupEnd = (): void => console.groupEnd()
const info = (...data: unknown[]): void => console.info(...data)
const log = (...data: unknown[]): void => console.log(...data)
const table = (tabularData?: unknown, properties?: string[]): void => console.table(tabularData, properties)
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
  dir,
  dirxml,
  error,
  group,
  groupCollapsed,
  groupEnd,
  info,
  log,
  table,
  time,
  timeEnd,
  timeLog,
  timeStamp,
  trace,
  warn,
}
