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