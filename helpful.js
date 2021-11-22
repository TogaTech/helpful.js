(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.returnExports = factory();
	}
}(typeof self !== 'undefined' ? self : this, function() {
	const helpful = {};

	helpful.stringToArray = function(string) {
		if(string == null) {
			return "";
		}
		let array = [];
		for(let i = 0; i < string.length; i++) {
			array.push(string[i]);
		}
		return array;
	}

	helpful.duplicateArray = function(array) {
		if(array == null) {
			return [];
		}
		let duplicated = [];
		for(let i = 0; i < array.length; i++) {
			duplicated.push(array[i]);
		}
		return duplicated;
	}

	helpful.differenceOfArrays = function(array1, array2) {
		if(array1 == null || array2 == null) {
			return [];
		}
		return array1.filter(value => !array2.includes(value));
	}

	helpful.sumOfArrays = function(array1, array2) {
		if(array1 == null || array2 == null) {
			return [];
		}
		let sum = [];
		for(let i = 0; i < array1.length; i++) {
			sum.push(array1[i]);
		}
		for(let i = 0; i < array2.length; i++) {
			sum.push(array2[i]);
		}
		return sum;
	}

	helpful.capitalize = function(string) {
		if(string == null) {
			return "";
		}
		if(typeof string !== "string") {
			return string;
		}
		if(string.split(" ").length > 1) {
			const result = string.split(" ").reduce((acc, value) => {
				const [firstLetter, ...rest] = value;
				acc += `${firstLetter.toUpperCase()}${rest.join("").toLowerCase()} `;
				return acc;
			}, "");
			return result.trimEnd();
		}

		const [firstLetter, ...rest] = string;
		return `${firstLetter.toUpperCase()}${rest.join("").toLowerCase()}`;
	};

	helpful.mergeArrays = function(array1, array2) {
		if(array1 == null || array2 == null) {
			return [];
		}
		const clone = array1.slice();
		for(let i = 0; i < array2.length; i++) {
			if(!clone.includes(array2[i])) {
				clone.push(array2[i]);
			}
		}
		return clone;
	}

	helpful.average = function(array) {
		if(array == null ) {
			return [];
		}
		let sum = 0;
		for(let i = 0; i < array.length; i++) {
			sum += array[i];
		}
		let average = sum / array.length ;
		return average;
	}

	helpful.shuffleArray = function(array) {
		if(array == null) {
			return [];
		}
		let result = [];
		let copy = array.slice();
		while( copy.length ){
			result.push(...copy.splice(Math.floor(Math.random() * copy.length), 1));
		}
		return result;
	}

	helpful.reverseArray = function(array) {
		if(array == null) {
			return [];
		}
		let result = [];
		let copy = array.slice();
		while( copy.length ){
			result.unshift(copy.shift());
		}
		return result;
	}

	function getPadString(delimiter, size) {
		return delimiter.repeat(size / delimiter.length) + delimiter.substring(0, size % delimiter.length);
	}

	helpful.pad = function(string, size, delimiter = " ") {
		if (string == null) {
			return "";
		}
		if(size == null) {
			return string;
		}
		if(delimiter == null) {
			delimiter = " ";
		}
		const availableChars = size - string.length;
		if (availableChars <= 0) {
			return string;
		}
		const leftPad = getPadString(delimiter, Math.floor(availableChars / 2));
		const rightPad = getPadString(delimiter, Math.ceil(availableChars / 2))
		return `${leftPad}${string}${rightPad}`;
	}

	helpful.padStart = function(string, size, delimiter = " ") {
		if (string == null) {
			return "";
		}
		if(size == null) {
			return string;
		}
		if(delimiter == null) {
			delimiter = " ";
		}
		const availableChars = size - string.length;
		if (availableChars <= 0) {
			return string;
		}
		const pad = getPadString(delimiter, availableChars);
		return `${pad}${string}`;
	}

	helpful.padEnd = function(string, size, delimiter = " ") {
		if (string == null) {
			return "";
		}
		if(size == null) {
			return string;
		}
		if(delimiter == null) {
			delimiter = " ";
		}
		const availableChars = size - string.length;
		if (availableChars <= 0) {
			return string;
		}
		const pad = getPadString(delimiter, availableChars);
		return `${string}${pad}`;
	}

	helpful.chunkArray = function(array, n) {
		if(array == null) {
			return [];
		}
		if(n == null) {
			return array;
		}
		const res = [];
		const numberOfChunks = Math.ceil(array.length / n);
		let from = 0;
		while(res.length < numberOfChunks) {
			const to = from + n;
			res.push(array.slice(from, to));
			from = to;
		}
		return res;
	}
  
  
	helpful.fillArray = function(array, object) {
		if(array == null) {
			return [];
		}
		for(let i = 0; i < array.length; i++) {
			array[i] = object
		}
		return array;
  }
  
  helpful.flattenArray = function(array) {
		let res = [];
		for(let i = 0; i < array.length; i++) {
      let item = array[i];
			if(Array.isArray(item)) {
				res.push(...item);
			} else {
				res.push(item);
			}
		}
		return res;
	}

	helpful.deepFlattenArray = function(array) {
		let res = [];
		for(let i = 0; i < array.length; i++) {
      let item = array[i];
			if(Array.isArray(item)) {
				res.push(...this.deepFlattenArray(item));
			} else {
				res.push(item);
			}
		}
		return res;
	}

	helpful.hex = {};

	/* Modified from https://github.com/TogaTech/tEnvoy  */
	helpful.hex.convertFromString = function(string) {
		if(string == null) {
			return "";
		}
		let hex = "";
		for(let i = 0; i < string.length; i++) {
			let c = string.charCodeAt(i).toString(16);
			while(c.length < 2) {
				c = "0" + c;
			}
			hex += c;
		}
		return hex;
	}

	/* Modified from https://github.com/TogaTech/tEnvoy  */
	helpful.hex.convertToString = function(hex) {
		if(hex == null) {
			return "";
		}
		let string = "";
		for(let i = 0; i < hex.length; i += 2) {
			string += String.fromCharCode(parseInt(hex.substring(i, i + 2), 16));
		}
		return string;
	}

	/* Modified from https://github.com/TogaTech/tEnvoy  */
	helpful.hex.convertFromBytes = function(bytes) {
		if(bytes == null || !(bytes instanceof Uint8Array)) {
			return "";
		}
		let hex = "";
		for(let i = 0; i < bytes.length; i++) {
			if(bytes[i].toString(16).length == 0) {
				hex += "00";
			} else if(bytes[i].toString(16).length == 1) {
				hex += "0" + bytes[i].toString(16);
			} else {
				hex += bytes[i].toString(16);
			}
		}
		return hex;
	}

	/* Modified from https://github.com/TogaTech/tEnvoy  */
	helpful.hex.convertToBytes = function(hex) {
		if(hex == null) {
			return new Uint8Array();
		}
		let bytes = new Uint8Array(hex.length / 2);
		for(let i = 0; i < hex.length; i += 2) {
			bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
		}
		return bytes;
	}

	helpful.partitionObject =  function(obj, func) {
		const toArray = Object.entries(obj);
		const filteredArray = toArray.filter(func);
		const filteredArraySet = new Set (filteredArray);
		const filteredArray2 = toArray.filter(e => !filteredArraySet.has(e));
		const toObjt1 = Object.fromEntries(filteredArray);
		const toObjt2 = Object.fromEntries(filteredArray2);
		const result = [toObjt1, toObjt2];

		return result;
	}

	return helpful;
}));
