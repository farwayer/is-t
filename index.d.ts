export function fn(val: unknown): val is Function
export function str(val: unknown): val is string
export function obj<T extends object>(val: unknown): val is T
export function nonNulObj<T extends Exclude<object, null>>(val: unknown): val is T
export function num(val: unknown): val is number
export function bool(val: unknown): val is boolean
export function sym(val: unknown): val is Symbol
export function bigInt(val: unknown): val is BigInteger
export function def<T>(val: T): val is Exclude<T, undefined>
export function undef(val: unknown): val is undefined
export function nul(val: unknown): val is null
export function int(val: unknown): val is number
export function nan(val: unknown): val is number
export function arr<T>(val: unknown): val is T[]
export function typedArray(val: unknown): val is ArrayBufferView
export function date(val: unknown): val is Date
export function err(val: unknown): val is Error
export function map<T extends Map<any, any>>(val: unknown): val is T
export function weakMap<T extends WeakMap<any, any>>(val: unknown): val is T
export function set<T extends Set<any>>(val: unknown): val is T
export function weakSet<T extends WeakSet<any>>(val: unknown): val is T
export function regExp(val: unknown): val is RegExp
export function promise(val: unknown): val is Promise
export function numObj(val: unknown): val is Number
export function strObj(val: unknown): val is String
export function weakRef(val: unknown): val is WeakRef
export function gen(val: unknown): val is Generator
