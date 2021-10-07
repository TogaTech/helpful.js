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

	describe("difference", function() {
		it("1: Should return [1]", function() {
			let expected = [1];
			let actual = helpful.difference([2, 1], [2, 3]);
			assert.equal(...expected, ...actual);
		});
		it("2: Should return []", function() {
			let expected = [];
			let actual = helpful.difference([], [2, 3]);
			assert.equal(expected.length, actual.length);
		});
		it("3: Should return [10, 20]", function() {
			let expected = [10, 20];
			let actual = helpful.difference([10, 20], [2, 1]);
			assert.equal(expected[0], actual[0]);
			assert.equal(expected[1], actual[1]);
		});
	});
});