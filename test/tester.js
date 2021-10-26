const helpful = require("../helpful.js")
const assert = require("assert");

describe("Tests", function() {
	describe("General", function() {
		it("1: Should convert string to array", function() {
			let expected = ["t", "e", "s", "t"];
			let actual = helpful.stringToArray("test");
			assert.deepEqual(expected, actual);
		});
		it("2: Should duplicate array", function() {
			let expected = ["t", "e", "s", "t"];
			let actual = helpful.duplicateArray(expected);
			assert.deepEqual(expected, actual);
		});
		it("3: Should find the difference of two arrays", function() {
			let expected = [1];
			let actual = helpful.differenceOfArrays([2, 1], [2, 3]);
			assert.deepEqual(expected, actual);
		});
		it("4: Should find the difference of two arrays", function() {
			let expected = [];
			let actual = helpful.differenceOfArrays([], [2, 3]);
			assert.deepEqual(expected, actual);
		});
		it("5: Should find the difference of two arrays", function() {
			let expected = [10, 20];
			let actual = helpful.differenceOfArrays([10, 20], [2, 1]);
			assert.deepEqual(expected, actual);
		});
		it("6: Should find the sum of two arrays", function() {
			let expected = [1, 2, 3, 4];
			let actual = helpful.sumOfArrays([1, 2], [3, 4]);
			assert.deepEqual(expected, actual);
		});
		it("7: Should render capitalized word (single word)", function() {
			let expected = "Hello";
			let actual = helpful.capitalize('heLLo');
			assert.equal(expected, actual);
		});
		it("8: Should render capitalized word (multiple words)", function() {
			let expected = "Hello Javascript World";
			let actual = helpful.capitalize('hello javaScript world');
			assert.equal(expected, actual);
		});
		it("9: Should merge the elements of two arrays", function() {
			let expected = [2, 4, 6, 8, 10, 1];
			let actual = helpful.mergeArrays([2, 4, 6], [6, 8, 10, 4, 1, 2]);
			assert.deepEqual(expected, actual);
		});
		it("10: Should calculate the average of the array",function(){
			let expected = 2.75;
			let actual = helpful.average([1, 2, 4, 4]);
			assert.equal(expected, actual);
		});
	});
	describe("Hex", function() {
		it("1: Should convert string to hex", function() {
			let expected = "74657374";
			let actual = helpful.hex.convertFromString("test");
			assert.equal(expected, actual);
		});
		it("2: Should convert hex to string", function() {
			let expected = "test";
			let actual = helpful.hex.convertToString("74657374");
			assert.equal(expected, actual);
		});
		it("3: Should convert bytes to hex", function() {
			let expected = "74657374";
			let actual = helpful.hex.convertFromBytes(new Uint8Array([116, 101, 115, 116]));
			assert.equal(expected, actual);
		});
		it("4: Should convert hex to bytes", function() {
			let expected = new Uint8Array([116, 101, 115, 116]);
			let actual = helpful.hex.convertToBytes("74657374");
			assert.deepEqual(expected, actual);
		});
	});
});
