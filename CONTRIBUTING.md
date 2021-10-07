# Contributing to helpful.js

## Formatting

All methods should be relatively short and not rely on external libraries/modules. This library should be standalone and not bulky in size.

**Method format:**
```javascript
...
helpful.methodName = function(parameters) {
	...
	return value;
}
```

**Method format for category:**
```javascript
helpful.category = {};
...
helpful.category.methodName = function(parameters) {
	...
	return value;
}
```

**Documentation format:**
````
### methodName
Description of the method and its purpose
```javascript
let relevantVariableName = helpful.methodName(exampleParameterFromTestCase); // exampleOutputFromTestCase
```
**Parameters:**
- parameterName: paramterType (`exampleParameterFromTestCase`)

**Return Type:** returnType (`exampleOutputFromTestCase`)
````

**Documentation format for category:**
````
## Category

### category.methodName
Description of the method and its purpose
```javascript
let relevantVariableName = helpful.category.methodName(exampleParameterFromTestCase); // exampleOutputFromTestCase
```
**Parameters:**
- parameterName: paramterType (`exampleParameterFromTestCase`)

**Return Type:** returnType (`exampleOutputFromTestCase`)
````

**Test case format:**
```javascript
describe("Tests", function() {
	describe("General", function() {
		...
		it("number: Should do something valid", function() {
			let expected = expectedValue;
			let actual = helpful.methodName(parameters);
			assert.equal(expected, actual);
			/*
			use assert.deepEqual for comparing arrays or objects instead of assert.equal,
			deep equal compares equality of the object and child objects
			*/
		});
```

**Test case format for category:**
```javascript
describe("Tests", function() {
	describe("Category", function() {
		...
		it("number: Should do something valid", function() {
			let expected = expectedValue;
			let actual = helpful.category.methodName(parameters);
			assert.equal(expected, actual);
			/*
			use assert.deepEqual for comparing arrays or objects instead of assert.equal,
			deep equal compares equality of the object and child objects
			*/
		});
```

**Code style:**
- Please use tabs to ensure consistency and accessibility across the codebase.
- There should be no spaces between a function name and the opening parenthesis.
- There should be one space between the function closing parenthesis and the opening curly brace.
- The opening curly brace should be on the same line as the function declaration/top of the block.
- Any lines of code that are long enough to require excessive sideways scrolling should be split into multiple lines.
- There should be one space between a term and operator (for example, `1 + 2` or `let x = 0;`).
- There should be one space after a comma (for example, `[1, 2, 3]`).
- Please use function syntax (`function name() {}`) and not arrow syntax (do not use `const name = () => {}`) to ensure consistency and compatibility across the codebase.
- Add a semicolon to the end of every statement (for example, `let x = 0;`).
- Use size-efficient assignment operators (for example, use `x += 1` instead of `x = x + 1`).
- Ensure that codeblocks are properly indented using a tab.
- Make sure to credit the source of any code you are using (if applicable).

After you've created a branch on your fork with your changes, it's time to [make a pull request][pr-link]. 

*Please follow the guidelines given below while making a Pull Request to helpful.js*

## Pull Request Guidelines

* Add your methods, documentation, and test cases to the bottom of a category in the same order (for general methods, this location starts before the categories start).
* If a method seems to fall into multiple categories, please place the method within the section most in line with the purpose of the method.
* Please add no more than 10 methods per Pull Request, submitting fewer methods allows us to approve your Pull Request faster.
* Please add or edit no more than 1 category per Pull Request, submitting fewer categories allows us to approve your Pull Request faster. Any category that you create has a minimum of 3 relevant methods.
* Please make sure the method has proper documentation in `./README.md` (a useful description, code example, parameter information, and return type) following the format and style of the rest of the documentation.
* The documentation for each method should not have more than 2500 characters (the recommended size of documentation for a single method is 250-1000 characters, the 2500 character limit per method is for more complex functions).
* The code and documentation should be gramatically and syntatically correct and should be written in English only.
* Each method should have at least 1 test case, added to the relevant testing category at the bottom of a category. The submission should pass all test cases (`npm test`).
* Please ONLY edit `./helpful.js`, `./test/tester.js`, and/or `./README.md` (exceptions can be made in rare circumstances), do NOT edit `./helpful.min.js`.
* Use a short descriptive commit message. *for e.g.*: ❌`Update helpful.js`  ✔ `Add stringToArray to general methods`
* Make sure the PR title is in the format of `Add Method-name Method` or `Add Method-name, Method-name, and Method-name Methods`  *for e.g.*: `Add stringToArray Method` or `Add hex.convertFromString, hex.convertToString, hex.convertFromBytes, and hex.convertFromBytes Methods`.
* Search previous Pull Requests or Issues before making a new one, as yours may be a duplicate.
* Target your Pull Request to the `main` branch of `TogaTech/helpful.js`.

Once you’ve submitted a pull request, the collaborators can review your proposed changes and decide whether or not to incorporate (pull in) your changes.

### Open Pull Requests
Once you’ve opened a pull request, a discussion will start around your proposed changes.

Other contributors and users may chime in, but ultimately the decision is made by the collaborators.

During the discussion, you may be asked to make some changes to your pull request.

If so, add more commits to your branch and push them, they will automatically go into the existing pull request.

Opening a pull request will trigger a GitHub Workflow to run tests on the code. After the tests complete, **please ensure that all the tests have passed**. If the tests did not pass, please run `npm test` locally and view the log to correct any errors that were found in your contribution. 

*Thanks for being a part of this project, and we look forward to hearing from you soon!*

[pr-link]: <https://help.github.com/articles/creating-a-pull-request/>