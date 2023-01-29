# safe-extend

---

1. Javascript is always pass by value, but when a variable refers to an object (including arrays), the "value" is a reference to the object.

2. Changing the value of a variable never changes the underlying primitive or object, it just points the variable to a new primitive or object.

3. However, changing a property of an object referenced by a variable does change the underlying object.

When you use [extend](https://www.npmjs.com/package/extend), you will encounter the above problem. safe-extend has deep copy all the parameters, so it avoids this problem.

**Thanks to ljharb and justmoon.**

**Notes:** safe-extend are based entirely on [extend](https://www.npmjs.com/package/extend). This is just a syntactic sugar.

```shell
npm install safe-extend
```

```js
var target = {a:1}
var obj = {b:2}

safeExtend(true, target, obj)
// equal
extend(
    true,
    extend(true, {}, target),
    extend(true, {}, obj)
)


safeExtend.clone(target) // deep copy
// equal
var emptyData = Array.isArray(target)? []: {}
extend(true, emptyData, target)
```

---

`extend` is a port of the classic extend() method from jQuery. It behaves as you expect. It is simple, tried and true.

Notes:

* Since Node.js >= 4,
  [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  now offers the same functionality natively (but without the "deep copy" option).
  See [ECMAScript 2015 (ES6) in Node.js](https://nodejs.org/en/docs/es6).
* Some native implementations of `Object.assign` in both Node.js and many
  browsers (since NPM modules are for the browser too) may not be fully
  spec-compliant.
  Check [`object.assign`](https://www.npmjs.com/package/object.assign) module for
  a compliant candidate.

## Installation

``` sh
npm install safe-extend
```

## Usage

**Syntax:** extend **(** [`deep`], `target`, `object1`, [`objectN`] **)**

*Extend one object with one or more others, returning the modified object.*

**Example:**

``` js
var extend = require('safe-extend');
extend(targetObject, object1, object2);
```

Keep in mind that the target object will be modified, and will be returned from extend().

If a boolean true is specified as the first argument, extend performs a deep copy, recursively copying any objects it finds. Otherwise, the copy will share structure with the original object(s).
Undefined properties are not copied. However, properties inherited from the object's prototype will be copied over.
Warning: passing `false` as the first argument is not supported.

### Arguments

* `deep` *Boolean* (optional)
If set, the merge becomes recursive (i.e. deep copy).
* `target`	*Object*
The object to extend.
* `object1`	*Object*
The object that will be merged into the first.
* `objectN` *Object* (Optional)
More objects to merge into the first.

## License

`extend` is licensed under the MIT License.
`safe-extend` is licensed under the MIT License

## Acknowledgements

All credit to the jQuery authors for perfecting this amazing utility.

Ported to Node.js by [Stefan Thomas][github-justmoon] with contributions by [Jonathan Buchanan][github-insin] and [Jordan Harband][github-ljharb].
