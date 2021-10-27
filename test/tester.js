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
		it("10: Should shuffle array", function() {
			let actual = [1, 2, 3, 4, 5, 6, 7];
			let shuffled = helpful.shuffleArray(actual);
			assert.notDeepEqual(shuffled, actual);
			assert.equal(7, shuffled.length)
			assert.equal(7, actual.length)
		});
		it("11: Should reverse array", function() {
			let expected = [7, 6, 5, 4, 3, 2, 1];
			let actual = helpful.reverseArray([1, 2, 3, 4, 5, 6, 7]);
			assert.deepEqual(expected, actual);
			assert.equal(7, expected.length)
			assert.equal(7, actual.length)
		});
		it("12: Should default pad with spaces", function() {
			let expected = "  test  ";
			let actual = helpful.pad("test", 8);
			assert.equal(expected, actual);
		})
		it("13: Should pad the end if extra room", function () {
			let expected = "**test***";
			let actual = helpful.pad("test", 9, "*");
			assert.equal(expected, actual);
		});
		it("14: Should cut the end of the padded characters if too long", function () {
			let expected = "_a_test_a_-";
			let actual = helpful.pad("test", 11, "_a_-");
			assert.equal(expected, actual);
		});
		it("15: Should cut the end of both sides if too long", function () {
			let expected = "_a_test_a_";
			let actual = helpful.pad("test", 10, "_a_-");
			assert.equal(expected, actual);
		});
		it("16: Should pad only the beginning of the string", function () {
			let expected = "**test";
			let actual = helpful.padStart("test", 6, "**test");
			assert.equal(expected, actual);
		});
		it("17: Should pad only the end of the string", function () {
			let expected = "test**";
			let actual = helpful.padEnd("test", 6, "**test");
			assert.equal(expected, actual);
		});
		it("18: Should split array into n-sized chunks", function() {
			let expected = [[1, 2, 3], [4, 5, 6]];
			let actual = helpful.chunkArray([1, 2, 3, 4, 5, 6], 3);
			assert.deepEqual(expected, actual);
			let expected2 = [[1, 2, 3], [4, 5]];
			let actual2 = helpful.chunkArray([1, 2, 3, 4, 5], 3);
			assert.deepEqual(expected2, actual2);
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
