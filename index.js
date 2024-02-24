export let fn = val => typeof val === 'function'
export let str = val => typeof val === 'string'
export let obj = val => typeof val === 'object'
export let num = val => typeof val === 'number'
export let bool = val => typeof val === 'boolean'
export let sym = val => typeof val === 'symbol'
export let bigInt = val => typeof val === 'bigint'
export let def = val => val !== undefined
export let undef = val => val === undefined
export let nul = val => val === null
export let nil = val => val == null
export let int = Number.isInteger
export let nan = Number.isNaN
export let arr = Array.isArray
export let typedArray = ArrayBuffer.isView
export let date = val => val instanceof Date
export let err = val => val instanceof Error
export let map = val => val instanceof Map
export let weakMap = val => val instanceof WeakMap
export let set = val => val instanceof Set
export let weakSet = val => val instanceof WeakSet
export let regExp = val => val instanceof RegExp
export let promise = val => val instanceof Promise
export let numObj = val => val instanceof Number
export let strObj = val => val instanceof String
export let weakRef = val => typeof WeakRef !== 'undefined' && val instanceof WeakRef
export let gen = val => {
  if (!val) return false

  let {constructor} = val
  if (!constructor) return false
  if (
    'GeneratorFunction' === constructor.name ||
    'GeneratorFunction' === constructor.displayName
  ) return true

  let {prototype} = constructor
  return fn(prototype.next) && fn(prototype.throw)
}
