/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

export { logger } from '@/logger'

export {
  assert,
  AssertError,
} from '@/assert'

export {
  guard,
  guardFor,
} from '@/guard'

export {
  FoundationError,
  FoundationTypeError,
} from '@/error'

export { uuidv4 } from '@/uuid'

export type {
  Nullable,
  Optional,
  Voidable,
  WritableKeys,
  ReadonlyKeys,
  PartialKeys,
  RequiredKeys,
  NullableKeys,
  RestrictedKeys,
  PartialRecord,
  KeysForTypes,
  TypesForKeys,
  RequiredKeysFor,
  NullableKeysFor,
  PartialKeysFor,
  WritableKeysFor,
  ReadonlyKeysFor,
  PickPublic,
  PickWritable,
  PickReadonly,
  PickRequired,
  PickNullable,
  PickPartial,
  UnboxPromise,
} from '@/type-defs'

export {
  stringify,
  parse,
  async,
  clone,
  equals,
  unique,
  assign,
  swapProps,
} from '@/tools'
