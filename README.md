<p align="center">
  <a href="https://togatech.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://togatech.org/favicon.png" width="100" alt="TogaTech Logo">
  </a>
</p>

<h1 align="center">helpful.js</h1>
<h3 align="center"><a href="https://helpful.js.org/">helpful.js.org</a></h3>
<p align="center">
	<a href="https://twitter.com/intent/tweet?text=I%20recently%20discovered%20the%20lightweight%20helpful.js%20library,%20a%20collection%20of%20helpful%20JavaScript%20functions%20started%20by%20TogaTech.org%20and%20built%20by%20the%20open-source%20community!&url=https://helpful.js.org/&via=TogaTechTweets&hashtags=developers,webdev,javascript,helpful,helpfuljs" target="_blank" rel="noopener noreferrer">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" alt="Tweet">
	</a>
	<br>
	<br>
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
	- [Browser CDN Import](#browser-cdn-import)
	- [Browser File Import](#browser-file-import)
	- [Node.js NPM Import](#nodejs-npm-import)
	- [Node.js File Import](#nodejs-file-import)
- [Minify](#minify)
- [Contributing](#contributing)
- [Methods](#methods)
	- [General](#general)
	- [Hex](#hex)

# Imports

## Browser CDN Import
The `./helpful.js` and `./helpful.min.js` files are available on the UNPKG and jsDelivr CDNs. Please note that some newer methods may not yet be available on the CDNs until a new version has been published to NPM (which occurs every few days).

**Minified from UNPKG (Recommended):**
```html
<script type="text/javascript" src="https://unpkg.com/@togatech/helpful-js@1/helpful.min.js"></script>
<script>
	helpful.stringToArray("hello");
	helpful.duplicateArray([0, 1, 1, 3, 5]);
	...
</script>
```

**Unminified from UNPKG:**
```html
<script type="text/javascript" src="https://unpkg.com/@togatech/helpful-js@1/helpful.js"></script>
<script>
	helpful.stringToArray("hello");
	helpful.duplicateArray([0, 1, 1, 3, 5]);
	...
</script>
```

**Minified from jsDelivr:**
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@togatech/helpful-js@1/helpful.min.js"></script>
<script>
	helpful.stringToArray("hello");
	helpful.duplicateArray([0, 1, 1, 3, 5]);
	...
</script>
```

**Unminified from jsDelivr:**
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@togatech/helpful-js@1/helpful.js"></script>
<script>
	helpful.stringToArray("hello");
	helpful.duplicateArray([0, 1, 1, 3, 5]);
	...
</script>
```

## Browser File Import
For the browser, only `./helpful.js` or `./helpful.min.js` is required and has all dependencies bundled inside the single file. We recommend including `./helpful.min.js.map` in the same directory as `./helpful.min.js`, which allows a browser to reconstruct the original unminified file in the debugger.

**Minified (Recommended):**
```html
<script type="text/javascript" src="./helpful.min.js"></script>
<script>
	helpful.stringToArray("hello");
	helpful.duplicateArray([0, 1, 1, 3, 5]);
	...
</script>
```

**Unminified:**
```html
<script type="text/javascript" src="./helpful.js"></script>
<script>
	helpful.stringToArray("hello");
	helpful.duplicateArray([0, 1, 1, 3, 5]);
	...
</script>
```

## Node.js NPM Import
Helpful.js is available through the NPM registry. Please note that some newer methods may not yet be available until a new version has been published to NPM (which occurs every few days). To install helpful.js, use the following command in the terminal:
```bash
npm install @togatech/helpful-js
```
Make sure to run the test cases to ensure that helpful.js works properly:
```bash
npm test
```
To include helpful.js in your code (includes `./helpful.js`):
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

**Unminified (Recommended):**
To include helpful.js in your code:
```javascript
const helpful = require("./helpful.js");
helpful.stringToArray("hello");
helpful.duplicateArray([0, 1, 1, 3, 5]);
...
```
To include specific helpful.js methods in your code:
```javascript
const { stringToArray, duplicateArray } = require("./helpful.js");
stringToArray("hello");
duplicateArray([0, 1, 1, 3, 5]);
...
```

**Minified:**
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
All minification is done transparently using a [GitHub Action Workflow](https://github.com/TogaTech/helpful.js/blob/main/.github/workflows/minify.yml). However, if you would like to minify the code yourself instead of using the provided `helpful.min.js` (and optional `helpful.min.js.map`), you can use [UglifyJS 3](https://github.com/mishoo/UglifyJS) to minifiy the code yourself.

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
let array = helpful.stringToArray("test"); // Array(4) ["t", "e", "s", "t"]
```
**Parameters:**
- string: string (`"test"`)

**Return Type:** Array (`Array(4) ["t", "e", "s", "t"]`)

### duplicateArray
Duplicates an array by creating a new array and transferring all the elements from the first array
```javascript
let array = helpful.duplicateArray(["t", "e", "s", "t"]); // Array(4) ["t", "e", "s", "t"]
```
**Parameters:**
- array: Array (`["t", "e", "s", "t"]`)

**Return Type:** Array (`Array(4) ["t", "e", "s", "t"]`)

### differenceOfArrays
Finds the difference between two arrays (any identical elements in the second array are removed from the first array)
```javascript
let differenceArray1 = helpful.differenceOfArrays([2, 1], [2, 3]); // Array(1) [1]
let differenceArray2 = helpful.differenceOfArrays([], [2, 3]); // Array(0) []
let differenceArray3 = helpful.differenceOfArrays([10, 20], [2, 1]); // Array(2) [10, 20]
```
**Parameters:**
- array1: Array (`[2, 1]`)
- array2: Array (`[2, 3]`)

**Return Type:** Array (`Array(1) [1]`)

### sumOfArrays
Finds the sum of two arrays (the two arrays are combined)
```javascript
let sumArray = helpful.sumOfArrays([1, 2], [3, 4]); // Array(4) [1, 2, 3, 4]
```
**Parameters:**
- array1: Array (`[1, 2]`)
- array2: Array (`[3, 4]`)

**Return Type:** Array (`Array(4) [1, 2, 3, 4]`)

### capitalize
Capitalizes the first letter of every word
```javascript
let capitalizedWord = helpful.capitalize('heLLo'); // Hello
let capitalizedSentence = helpful.capitalize('hello javaScript world!'); // Hello Javascript World!
```
**Parameters:**
- string: string (`"heLLo"`)

**Return Type:** string (`"Hello"`)

### mergeArrays
Merges the second array into the first one (skip duplicated values)
```javascript
let mergedArray = helpful.mergeArrays([1, 2, 3], [2, 3, 4]); // Array(4) [1, 2, 3, 4]
```
**Parameters:**
- array1: Array (`[1, 2, 3]`)
- array2: Array (`[2, 3, 4]`)

**Return Type:** Array (`Array(4) [1, 2, 3, 4]`)

### shuffleArray
Shuffles an array, returning another array with the same values but in a different order
```javascript
let array = helpful.shuffleArray(["t", "e", "s", "t"]); // Array(4) ["e", "t", "t", "s"]
```
**Parameters:**
- array: Array (`["t", "e", "s", "t"]`)

**Return Type:** Array(`Array(4) ["e", "t", "t", "s"]`)

### reverseArray
Reverses an array by creating a new array with the same values in the opposite order
```javascript
let array = helpful.reverseArray(["t", "e", "s", "t"]); // Array(4) ["t", "s", "e", "t"]
```
**Parameters:**
- array: Array (`["t", "e", "s", "t"]`)

**Return Type:** Array (`Array(4) ["t", "s", "e", "t"]`)

### pad
Pads a string by adding characters on both sides until the string reaches a certain size

Padding is added evenly on both sides, but if there is an odd number of padding characters, the extra
padding character is added to the end of the string. If the padding character is too large, it will be truncated.
```javascript
let padded1 = helpful.pad("test", 8, "*"); // "**test**"
let padded2 = helpful.pad("test", 8); // "  test  "
let padded3 = helpful.pad("test", 9, "*"); // "**test***"
let padded4 = helpful.pad("test", 11, "_a_-"); // "_a_test_a_-"
let padded5 = helpful.pad("test", 10, "_a_-"); // "_a_test_a_"
```
**Parameters:**
- string: string (`"test"`)
- size: number (`8`)
- delimiter: string (`"*"`)

**Return Type:** string (`"**test**"`)

### padStart
Pads a string by adding characters to the start until the string reaches a certain size

If the padding character is too large, it will be truncated.
```javascript
let padded1 = helpful.padStart("test", 6, "*"); // "**test"
let padded2 = helpful.padStart("test", 6); // "  test"
let padded3 = helpful.padStart("test", 6, "_a_-"); // "_atest"
```
**Parameters:**
- string: string (`"test"`)
- size: number (`6`)
- delimiter: string (`"*"`)

**Return Type:** string (`"**test"`)

### padEnd
Pads a string by adding characters to the end until the string reach a certain size

If the padding character is too large, it will be truncated.
```javascript
let padded1 = helpful.padEnd("test", 6, "*"); // "test**"
let padded2 = helpful.padEnd("test", 6); // "test  "
let padded3 = helpful.padEnd("test", 6, "_a_-"); // "test_a"
```
**Parameters:**
- string: string (`"test"`)
- size: number (`6`)
- delimiter: string (`"*"`)

**Return Type:** string (`"test**"`)

### chunkArray
Splits an array into n-sized chunks
```javascript
let chunkedArray1 = helpful.chunkArray([1, 2, 3, 4, 5, 6], 3); // Array(2) [[1, 2, 3], [4, 5, 6]]
let chunkedArray2 = helpful.chunkArray([1, 2, 3, 4, 5], 3); // Array(2) [[1, 2, 3], [4, 5]]
```
**Parameters:**
- array: Array (`[1, 2, 3, 4, 5, 6]`)
- n: number (`3`)

**Return Type:** Array (`Array(2) [[1, 2, 3], [4, 5, 6]]`)

### average
Finds the average of an array
```javascript
let averageOfArray = helpful.average([1, 2, 4, 4]); // 2.75
```
**Parameters:**
- array: Array (`[1, 2, 4, 4]`)

**Return Type:** number (`2.75`)

### fillArray
Replaces each element of the given array with the given value
```javascript
let array = helpful.fillArray(["t", "e", "s", "t"], 1); // [1, 1, 1, 1]
```
**Parameters:**
- array: Array (`["t", "e", "s", "t"]`)

**Return Type:** Array (`[1, 1, 1, 1]`)

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
- bytes: Uint8Array (`new Uint8Array([116, 101, 115, 116])`)

**Return Type:** string (`"74657374"`)

### hex.convertToBytes
Converts hexadecimal to a bytes array
```javascript
let bytes = helpful.hex.convertToBytes("74657374"); // Uint8Array(4) [116, 101, 115, 116]
```
**Parameters:**
- hex: string (`"74657374"`)

**Return Type:** Uint8Array (`Uint8Array(4) [116, 101, 115, 116]`)
