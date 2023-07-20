import { uuidv4 as F } from "lib0/random.js";
const i = (e, o) => console.assert(e, o), f = () => console.clear(), u = (e) => console.count(e), l = (e) => console.countReset(e), a = (...e) => console.debug(...e), m = (...e) => console.error(...e), p = (...e) => console.info(...e), g = (...e) => console.log(...e), y = (e) => console.time(e), d = (e) => console.timeEnd(e), O = (e, ...o) => console.timeLog(e, o), b = (e) => console.timeStamp(e), w = (...e) => console.log(...e), h = (...e) => console.warn(...e), E = {
  assert: i,
  clear: f,
  count: u,
  countReset: l,
  debug: a,
  error: m,
  info: p,
  log: g,
  time: y,
  timeEnd: d,
  timeLog: O,
  timeStamp: b,
  trace: w,
  warn: h
};
class S extends Error {
  get name() {
    return this.constructor.name;
  }
  toString() {
    return `[${this.name} ${this.message}]`;
  }
}
class P extends TypeError {
  /**
   * Fetches the `name` value for the class.
   */
  get name() {
    return this.constructor.name;
  }
  toString() {
    return `[${this.name} ${this.message}]`;
  }
}
class j extends S {
}
const x = (e, o) => {
  if (e)
    return !0;
  throw new j(o);
};
function r(e, ...o) {
  if (e === null || typeof e > "u")
    return !1;
  if (typeof e == "object") {
    for (const t of o)
      if (!(t in e))
        return !1;
  } else if (typeof e != "object" && 0 < o.length)
    return !1;
  return !0;
}
function N(e, ...o) {
  if (Array.isArray(e)) {
    for (const t of e)
      if (!r(t, ...o))
        return !1;
  }
  return r(e, ...o);
}
const c = (e, o = 25) => {
  const t = setTimeout(e, o);
  return () => clearTimeout(t);
}, $ = (e, o, ...t) => {
  const n = e.concat();
  c(function() {
    const s = n.shift();
    typeof s == "function" && s(...t), 0 < n.length ? c(arguments.callee, 25) : o();
  }, 25);
}, J = (e) => JSON.parse(JSON.stringify(e)), T = (e, o) => JSON.stringify(e) === JSON.stringify(o), A = (e) => [...new Set(e)], k = (e, ...o) => {
  for (const t of o) {
    for (const n of Object.getOwnPropertyNames(t)) {
      const s = Object.getOwnPropertyDescriptor(t, n);
      typeof s < "u" && Object.defineProperty(e, n, s);
    }
    for (const n of Object.getOwnPropertySymbols(t)) {
      const s = Object.getOwnPropertyDescriptor(t, n);
      typeof s < "u" && Object.defineProperty(e, n, s);
    }
  }
  return e;
}, q = (e, o) => {
  const t = {};
  for (const n in e)
    t[n] = o[n], o[n] = e[n];
  return t;
};
export {
  j as AssertError,
  S as FoundationError,
  P as FoundationTypeError,
  x as assert,
  k as assign,
  J as clone,
  T as equals,
  N as guard,
  E as logger,
  $ as multistep,
  q as swapProps,
  c as timeout,
  A as unique,
  F as uuidv4
};
