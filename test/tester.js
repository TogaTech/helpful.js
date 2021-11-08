const helpful = require("../helpful.js")
const assert = require("assert");

describe("Tests", function() {
	describe("General", function() {
		let i = 0;

		i++;
		it(`${i}: stringToArray - should convert string to array`, function() {
			let expected = ["t", "e", "s", "t"];
			let actual = helpful.stringToArray("test");
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: duplicateArray - Should duplicate array`, function() {
			let expected = ["t", "e", "s", "t"];
			let actual = helpful.duplicateArray(expected);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: differenceOfArrays - Should find the difference of two arrays`, function() {
			let expected = [1];
			let actual = helpful.differenceOfArrays([2, 1], [2, 3]);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: differenceOfArrays - Should find the difference of two arrays`, function() {
			let expected = [];
			let actual = helpful.differenceOfArrays([], [2, 3]);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: differenceOfArrays - Should find the difference of two arrays`, function() {
			let expected = [10, 20];
			let actual = helpful.differenceOfArrays([10, 20], [2, 1]);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: sumOfArrays - Should find the sum of two arrays`, function() {
			let expected = [1, 2, 3, 4];
			let actual = helpful.sumOfArrays([1, 2], [3, 4]);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: capitalize - Should render capitalized word (single word)`, function() {
			let expected = "Hello";
			let actual = helpful.capitalize('heLLo');
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: capitalize - Should render capitalized word (multiple words)`, function() {
			let expected = "Hello Javascript World";
			let actual = helpful.capitalize('hello javaScript world');
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: mergeArrays - Should merge the elements of two arrays`, function() {
			let expected = [2, 4, 6, 8, 10, 1];
			let actual = helpful.mergeArrays([2, 4, 6], [6, 8, 10, 4, 1, 2]);
			assert.deepEqual(expected, actual);
		});
    
		i++;
		it(`${i}: shuffleArray - Should shuffle array`, function() {
			let unshuffled = [1, 2, 3, 4, 5, 6, 7];
			let shuffled = helpful.shuffleArray(unshuffled);
			assert.equal(7, shuffled.length);
			assert.equal(7, unshuffled.length);
		});

		i++;
		it(`${i}: reverseArray - Should reverse array`, function() {
			let expected = [7, 6, 5, 4, 3, 2, 1];
			let actual = helpful.reverseArray([1, 2, 3, 4, 5, 6, 7]);
			assert.deepEqual(expected, actual);
			assert.equal(7, expected.length);
			assert.equal(7, actual.length);
		});

		i++;
		it(`${i}: pad - Should default pad with spaces`, function() {
			let expected = "  test  ";
			let actual = helpful.pad("test", 8);
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: pad - Should pad the end if extra room`, function() {
			let expected = "**test***";
			let actual = helpful.pad("test", 9, "*");
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: pad - Should cut the end of the padded characters if too long`, function() {
			let expected = "_a_test_a_-";
			let actual = helpful.pad("test", 11, "_a_-");
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: pad - Should cut the end of both sides if too long`, function() {
			let expected = "_a_test_a_";
			let actual = helpful.pad("test", 10, "_a_-");
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: padStart - Should pad only the beginning of the string`, function() {
			let expected = "**test";
			let actual = helpful.padStart("test", 6, "*");
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: padStart - Should cut the end of the padded characters if too long`, function() {
			let expected = "_atest";
			let actual = helpful.padStart("test", 6, "_a_-");
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: padEnd - Should pad only the end of the string`, function() {
			let expected = "test**";
			let actual = helpful.padEnd("test", 6, "*");
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: padEnd - Should cut the end of the padded characters if too long`, function() {
			let expected = "test_a";
			let actual = helpful.padEnd("test", 6, "_a_-");
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: chunkArray - Should split array into n-sized chunks`, function() {
			let expected = [[1, 2, 3], [4, 5, 6]];
			let actual = helpful.chunkArray([1, 2, 3, 4, 5, 6], 3);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: chunkArray - Should split array into n-sized chunks (with one incomplete chunk)`, function() {
			let expected = [[1, 2, 3], [4, 5]];
			let actual = helpful.chunkArray([1, 2, 3, 4, 5], 3);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: average - Should calculate the average of an array`, function() {
			let expected = 2.75;
			let actual = helpful.average([1, 2, 4, 4]);
			assert.equal(expected, actual);
		});
    
    i++;
		it(`${i}: fillArray - Should return array filled with the given value`, function() {
			let expected = [1, 1, 1, 1, 1, 1, 1];
			let actual = helpful.fillArray([1, 2, 3, 4, 5, 6, 7], 1);
			assert.deepEqual(expected, actual);
		});
		
		i++;
		it(`${i}: fillArray - Should fill array with the given value`, function() {
			let expected = ["*", "*", "*", "*"];
			let actual = [1, 2, 3, 4];
			helpful.fillArray(actual, "*");
			assert.deepEqual(expected, actual);
		});
    
    i++;
		it(`${i}: flatten - Should flatten a multidimensional array`, function() {
			let expected = [0, 1, 2, 3];
			let actual = helpful.flattenArray([[0, 1], [2, 3]]);
			assert.deepEqual(expected, actual);
		});
    
    i++;
		it(`${i}: flatten - Should flatten a multidimensional array containing a multidimensional array`, function() {
			let expected = [0, 1, 2, [3, 4]];
			let actual = helpful.flattenArray([[0, 1], [2, [3, 4]]]);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: deepFlatten - Should deep flatten a multidimensional array`, function() {
			let expected = [0, 1, 2, 3];
			let actual = helpful.deepFlattenArray([[0, 1], [2, 3]]);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: deepFlatten - Should deep flatten a multidimensional array containing a multidimensional array`, function() {
			let expected = [0, 1, 2, 3, 4];
			let actual = helpful.deepFlattenArray([[0, 1], [2, [3, 4]]]);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: deepFlatten - Should deep flatten a multidimensional array containing multiple inner multidimensional arrays`, function() {
			let expected = [0, 1, 2, 3, 4, 5, 6];
			let actual = helpful.deepFlattenArray([[0, 1], [2, [3, 4, [5, [6]]]]]);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: partitionArray - Should return array partitioned based on condition (item > 2)`, function() {
			let expected = [[3, 4], [1, 2]];
			let actual = helpful.partitionArray([1, 2, 3, 4], n => n > 2);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: partitionArray - Should return array partitioned based on condition  (item = true)`, function() {
			let expected = [[1, 2, 3, 4], []];
			let actual = helpful.partitionArray([1, 2, 3, 4], n => true);
			assert.deepEqual(expected, actual);
		});

		i++;
		it(`${i}: partitionArray - Should return array partitioned based on condition (item = false)`, function() {
			let expected = [[], [1, 2, 3, 4]];
			let actual = helpful.partitionArray([1, 2, 3, 4], n => false);
			assert.deepEqual(expected, actual);
		});

	});
	describe("Hex", function() {
		let i = 0;

		i++;
		it(`${i}: hex.convertFromString - Should convert string to hex`, function() {
			let expected = "74657374";
			let actual = helpful.hex.convertFromString("test");
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: hex.convertToString - Should convert hex to string`, function() {
			let expected = "test";
			let actual = helpful.hex.convertToString("74657374");
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: hex.convertFromBytes - Should convert bytes to hex`, function() {
			let expected = "74657374";
			let actual = helpful.hex.convertFromBytes(new Uint8Array([116, 101, 115, 116]));
			assert.equal(expected, actual);
		});

		i++;
		it(`${i}: hex.convertToBytes - Should convert hex to bytes`, function() {
			let expected = new Uint8Array([116, 101, 115, 116]);
			let actual = helpful.hex.convertToBytes("74657374");
			assert.deepEqual(expected, actual);
		});

	});

});
