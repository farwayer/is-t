declare function fn(val: unknown): val is Function
declare function str(val: unknown): val is string
declare function obj<T extends object>(val: unknown): val is T
declare function nonNulObj<T extends Exclude<object, null>>(val: unknown): val is T
declare function num(val: unknown): val is number
declare function bool(val: unknown): val is boolean
declare function sym(val: unknown): val is Symbol
declare function bigInt(val: unknown): val is BigInteger
declare function def<T extends Exclude<any, undefined>>(val: unknown): val is T
declare function undef(val: unknown): val is undefined
declare function nul(val: unknown): val is null
declare function int(val: unknown): val is number
declare function nan(val: unknown): val is number
declare function arr<T>(val: unknown): val is T[]
declare function typedArray(val: unknown): val is ArrayBufferView
declare function date(val: unknown): val is Date
declare function err(val: unknown): val is Error
declare function map<T extends Map<any, any>>(val: unknown): val is T
declare function weakMap<T extends WeakMap<any, any>>(val: unknown): val is T
declare function set<T extends Set<any>>(val: unknown): val is T
declare function weakSet<T extends WeakSet<any>>(val: unknown): val is T
declare function regExp(val: unknown): val is RegExp
declare function promise(val: unknown): val is Promise
declare function numObj(val: unknown): val is Number
declare function strObj(val: unknown): val is String
declare function weakRef(val: unknown): val is WeakRef
declare function gen(val: unknown): val is Generator
