/*!
 * isoftype-ts <https://github.com/TomHeinemeyer/isoftype-ts>
 *
 * Copyright (c) 2024, Tom Heinemeyer.
 * Released under the MIT License.
 */

type GenericObject = Record<string | number | symbol, unknown>

/**
 * @template T
 * @param {GenericObject} obj The object to be checked.
 * @param {keyof T} key A key either as a descriminator itself or in conjuction with a value.
 * @param {any} [value] An optional value for the key.
 * @returns {boolean} True and assigns obj to be of generic parameter T, if the obj parameter is an object and matches the criteria specified by the other parameters. False otherwise.
 * @description If the value parameter is ommitted, the function just checks for the presence of the key in the provided object. If it is provided, the value at the key in the object will be strictly compared.
 * @example
 * // logs true
 * console.debug(isOfType({key: 'value'}, 'key'))
 * console.debug(isOfType({key: 'value'}, 'key', 'value'))
 * // logs false
 * console.debug(isOfType({key: 'value'}, 'foo'))
 * console.debug(isOfType({key: 'value'}, 'key', 'foo'))
 * @example
 * // can also be used for safer type assignments than casting
 * type Foo = { foo: string }
 *
 * const foo(obj: unknown) => {
 *   if(!isOfType<Foo>(obj, 'foo')) return
 *   // obj is now known to be of type Foo and the property
 *   // foo can safely be accessed
 *   return obj.foo
 * }
 */
export default function isOfType<T extends GenericObject>(
  obj: GenericObject,
  key: keyof T,
  value?: any
): obj is T {
  if (value) {
    return obj[key] === value
  }
  return key in obj
}
