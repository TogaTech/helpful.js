<p align="center">
  <a href="https://togatech.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://togatech.org/favicon.png" width="100" alt="TogaTech Logo">
  </a>
</p>

<h1 align="center">helpful.js</h1>
<p align="center">
  <a href="https://github.com/TogaTech/helpful.js/actions"><img src="https://img.shields.io/github/workflow/status/TogaTech/helpful.js/Node.js%20CI" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/@togatech/helpful-js"><img src="https://img.shields.io/npm/v/@togatech/helpful-js.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@togatech/helpful-js"><img src="https://img.shields.io/npm/l/@togatech/helpful-js.svg?sanitize=true" alt="License"></a>
  <a href="https://www.npmjs.com/package/@togatech/helpful-js"><img src="https://img.shields.io/npm/dm/@togatech/helpful-js.svg?sanitize=true" alt="Monthly Downloads"></a>
  <a href="https://www.npmjs.com/package/@togatech/helpful-js"><img src="https://img.shields.io/npm/dt/@togatech/helpful-js.svg?sanitize=true" alt="Total Downloads"></a>
</p>

A collection of helpful JavaScript functions, started by [TogaTech.org](https://togatech.org/) and built by the open-source community

To contribute to helpful.js, please see the [contributing guide](/CONTRIBUTING.md).

# Table of Contents
- [Imports](#imports)
	- [Browser Import](#browser-import)
	- [Node.js NPM Import](#nodejs-file-import)
- [Minify](#minify)
- [Contributing](#contributing)
- [Methods](#methods)
	- [General](#general)
	- [Hex](#hex)

# Imports

## Browser Import
For the browser, only `./helpful.js` or `./helpful.min.js` is required and has all dependencies bundled inside the single file. We recommend including `./helpful.min.js.map` in the same directory as `./helpful.min.js`, which allows a browser to reconstruct the original unminified file in the debugger.

```html
<script type="text/javascript" src="./helpful.min.js"></script>
<script>
	helpful.stringToArray("hello");
	helpful.duplicateArray([0, 1, 1, 3, 5]);
	...
</script>
```

## Node.js NPM Import
Helpful.js is available through the NPM registry. To install helpful.js, use the following command in the terminal:
```bash
npm install @togatech/helpful-js
```
Make sure to run the test cases to ensure that helpful.js works properly:
```bash
npm test
```
To include helpful.js in your code:
```javascript
const helpful = require("@togatech/helpful-js");
helpful.stringToArray("hello");
helpful.duplicateArray([0, 1, 1, 3, 5]);
...
```
To include specific helpful.js methods in your code:
```javascript
const { stringToArray, duplicateArray } = require("@togatech/helpful-js");
stringToArray("hello");
duplicateArray([0, 1, 1, 3, 5]);
...
```

## Node.js File Import
For node.js file import, place the `./helpful.js` or `./helpful.min.js` file in your project directory.

Make sure to run the test cases to ensure that helpful.js works properly (you will need to add the `./test` folder to the project directory):
```bash
npm install mocha --save-dev
mocha
```
To include helpful.js in your code:
```javascript
const helpful = require("./helpful.min.js");
helpful.stringToArray("hello");
helpful.duplicateArray([0, 1, 1, 3, 5]);
...
```
To include specific helpful.js methods in your code:
```javascript
const { stringToArray, duplicateArray } = require("./helpful.min.js");
stringToArray("hello");
duplicateArray([0, 1, 1, 3, 5]);
...
```

# Minify
If you would like to minify the code yourself instead of using the provided `tenvoy.min.js` (and optional `tenvoy.min.js.map`), you can use [UglifyJS 3](https://github.com/mishoo/UglifyJS) to minifiy the code yourself.

To install UglifyJS 3 as a command line app through NPM, run `npm install uglify-js -g`.

After UglifyJS 3 has been installed, you can run the following commands in your terminal:
```bash
uglifyjs ./helpful.js -o ./helpful.min.js -c -m --source-map "filename='./helpful.min.js.map',url='helpful.min.js.map'"
```

# Contributing
To contribute to helpful.js, please see the [contributing guide](/CONTRIBUTING.md) and open a [pull request](https://github.com/TogaTech/helpful.js/pulls). We look forward to reviewing your contributions!

# Methods

## General

### stringToArray
Converts a string into an array of individual characters
```javascript
let array = helpful.stringToArray("test"); // ["t", "e", "s", "t"]
```
**Parameters:**
- string: string (`"test"`)

**Return Type:** Array (`["t", "e", "s", "t"]`)

### duplicateArray
Duplicates an array by creating a new array and transferring all the elements from the first array
```javascript
let array = helpful.duplicateArray(["t", "e", "s", "t"]); // ["t", "e", "s", "t"]
```
**Parameters:**
- array: Array (`["t", "e", "s", "t"]`)

**Return Type:** Array (`["t", "e", "s", "t"]`)


### differenceOfArrays
Finds the difference between two arrays (any identical elements in the second array are removed from the first array)
```javascript
let differenceArray = helpful.differenceOfArrays([2, 1], [2, 3]); // [1]
```
**Parameters:**
- array1: Array (`[2, 1]`)
- array2: Array (`[2, 3]`)

**Return Type:** Array (`Array [1]`)

### sumOfArrays
Finds the sum of two arrays (the two arrays are combined)
```javascript
let sumArray = helpful.sumOfArrays([1, 2], [3, 4]); // [1, 2, 3, 4]
```
**Parameters:**
- array1: Array (`[1, 2]`)
- array2: Array (`[3, 4]`)

**Return Type:** Array (`Array [1, 2, 3, 4]`)

### capitalize
Capitalizes the first letter of every word
```javascript
let capitalizedWord = helpful.capitalize('heLLo'); // Hello
let capitalizedSentence = helpful.capitalize('hello javaScript world!'); // Hello Javascript World!
```
**Parameters:**
- string: string (`"heLLo"`)

**Return Type:** string (`"Hello"`)

## Hex

### hex.convertFromString
Converts a string to hexadecimal
```javascript
let hex = helpful.hex.convertFromString("test"); // "74657374"
```
**Parameters:**
- string: string (`"test"`)

**Return Type:** string (`"74657374"`)

### hex.convertToString
Converts hexadecimal to a string
```javascript
let string = helpful.hex.convertToString("74657374"); // "test"
```
**Parameters:**
- hex: string (`"74657374"`)

**Return Type:** string (`"test"`)

### hex.convertFromBytes
Converts a bytes array to hexadecimal
```javascript
let hex = helpful.hex.convertFromBytes(new Uint8Array([116, 101, 115, 116])); // "74657374"
```
**Parameters:**
- bytes: Uint8Array (`Uint8Array [116, 101, 115, 116]`)

**Return Type:** string (`"74657374"`)

### hex.convertToBytes
Converts hexadecimal to a bytes array
```javascript
let bytes = helpful.hex.convertToBytes("74657374"); // Uint8Array [116, 101, 115, 116]
```
**Parameters:**
- hex: string (`"74657374"`)

**Return Type:** Uint8Array (`Uint8Array [116, 101, 115, 116]`)
