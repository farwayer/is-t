const isType = type => val => typeof val === type

export const isFn = isType('function')
export const isStr = isType('string')
export const isObj = isType('object')
export const isDef = val => val !== undefined
export const isNul = val => val === null
export const isInt = val => Number.isInteger(val)
export const isNan = val => Number.isNaN(val)
export const isArr = val => Array.isArray(val)
export const isGen = val => {
  if (!val) return false

  const {constructor} = val
  if (!constructor) return false
  if (
    'GeneratorFunction' === constructor.name ||
    'GeneratorFunction' === constructor.displayName
  ) return true

  const {prototype} = constructor
  return isFn(prototype.next) && isFn(prototype.throw)
}
