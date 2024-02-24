export let isFn = val => typeof val === 'function'
export let isStr = val => typeof val === 'string'
export let isObj = val => typeof val === 'object'
export let isNum = val => typeof val === 'number'
export let isBool = val => typeof val === 'boolean'
export let isSym = val => typeof val === 'symbol'
export let isBigInt = val => typeof val === 'bigint'
export let isDef = val => val !== undefined
export let isUndef = val => val === undefined
export let isNul = val => val === null
export let isNil = val => val == null
export let isInt = Number.isInteger
export let isNan = Number.isNaN
export let isArr = Array.isArray
export let isTypedArray = ArrayBuffer.isView
export let isDate = val => val instanceof Date
export let isErr = val => val instanceof Error
export let isMap = val => val instanceof Map
export let isWeakMap = val => val instanceof WeakMap
export let isSet = val => val instanceof Set
export let isWeakSet = val => val instanceof WeakSet
export let isRegExp = val => val instanceof RegExp
export let isPromise = val => val instanceof Promise
export let isNumObj = val => val instanceof Number
export let isStrObj = val => val instanceof String
export let isWeakRef = val => typeof WeakRef !== 'undefined' && val instanceof WeakRef
export let isGen = val => {
  if (!val) return false

  let {constructor} = val
  if (!constructor) return false
  if (
    'GeneratorFunction' === constructor.name ||
    'GeneratorFunction' === constructor.displayName
  ) return true

  let {prototype} = constructor
  return isFn(prototype.next) && isFn(prototype.throw)
}
