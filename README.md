# isoftype-ts [![NPM version](https://img.shields.io/npm/v/isoftype-ts.svg?style=flat)](https://www.npmjs.com/package/isoftype-ts) [![NPM monthly downloads](https://img.shields.io/npm/dm/isoftype-ts.svg?style=flat)](https://npmjs.org/package/isoftype-ts) [![NPM total downloads](https://img.shields.io/npm/dt/isoftype-ts.svg?style=flat)](https://npmjs.org/package/isoftype-ts)

> Helps you to safely assign a type to an object. Can be used when receiving an union or when fetching from a remote data source. When taking a type argument, let's you only pick keys from the specified type and if the check passes assigns the type. If used without a type argument the object will be of type `Record<string | number | symbol, unknown>` afterwards. Can either only be used with a key, or with a key and value. First checks for presence of the key in the object, second keys into the object and compares against the provided value.

## Install

Install using [npm](https://www.npmjs.com/):

```sh
$ npm install --save isoftype-ts
```

## Usage

```ts
import isOfType from "isoftype-ts"
```

Use as so:

```js
type Person = {
  name: string
  height: string
}

type Starship = {
  name: string
  crew: number
}

const foo = (bar: Person | Starship) => {
    if(isOfType<Person>(bar, 'height')) {
        // bar has the type Person now and all properties can safely be accessed!
        return "It's a person!"
    } else {
        // bar has the type Starship now and all properties can safely be accessed!
        return "It's a starship!"
    }
}
```

### Author

**Tom Heinemeyer**

- [GitHub Profile](https://github.com/TomHeinemeyer)

### License

Copyright © 2024, [Tom Heinemeyer](https://github.com/TomHeinemeyer).
Released under the [MIT License](LICENSE).
