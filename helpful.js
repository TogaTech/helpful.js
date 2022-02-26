(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.helpful = factory();
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
		if(array == null) {
			return [];
		}
		let sum = 0;
		for(let i = 0; i < array.length; i++) {
			sum += array[i];
		}
		let average = sum / array.length;
		return average;
	}

	helpful.shuffleArray = function(array) {
		if(array == null) {
			return [];
		}
		let result = [];
		let copy = array.slice();
		while(copy.length) {
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
		while(copy.length) {
			result.unshift(copy.shift());
		}
		return result;
	}

	function getPadString(delimiter, size) {
		return delimiter.repeat(size / delimiter.length) + delimiter.substring(0, size % delimiter.length);
	}

	helpful.pad = function(string, size, delimiter = " ") {
		if(string == null) {
			return "";
		}
		if(size == null) {
			return string;
		}
		if(delimiter == null) {
			delimiter = " ";
		}
		const availableChars = size - string.length;
		if(availableChars <= 0) {
			return string;
		}
		const leftPad = getPadString(delimiter, Math.floor(availableChars / 2));
		const rightPad = getPadString(delimiter, Math.ceil(availableChars / 2))
		return `${leftPad}${string}${rightPad}`;
	}

	helpful.padStart = function(string, size, delimiter = " ") {
		if(string == null) {
			return "";
		}
		if(size == null) {
			return string;
		}
		if(delimiter == null) {
			delimiter = " ";
		}
		const availableChars = size - string.length;
		if(availableChars <= 0) {
			return string;
		}
		const pad = getPadString(delimiter, availableChars);
		return `${pad}${string}`;
	}

	helpful.padEnd = function(string, size, delimiter = " ") {
		if(string == null) {
			return "";
		}
		if(size == null) {
			return string;
		}
		if(delimiter == null) {
			delimiter = " ";
		}
		const availableChars = size - string.length;
		if(availableChars <= 0) {
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

	const getPadArray = function(delimiter, size) {
		return [].concat.apply([], Array(size).fill(delimiter)).slice(0, size);
	}

	helpful.padArray = function(array, size, delimiter) {
		if(array === null) {
			return [];
		}
		const availableSpaces = size - array.length;
		if(availableSpaces <= 0) {
			return array;
		}
		const leftPad = getPadArray(delimiter, Math.floor(availableSpaces / 2));
		const rightPad = getPadArray(delimiter, Math.ceil(availableSpaces / 2));
		return [ ...leftPad, ...array, ...rightPad ];
	}

	helpful.padArrayStart = function(array, size, delimiter) {
		if(array === null) {
			return [];
		}
		const availableSpaces = size - array.length;
		if(availableSpaces <= 0) {
			return array;
		}
		const pad = getPadArray(delimiter, availableSpaces);
		return [ ...pad, ...array ];
	}

	helpful.padArrayEnd = function(array, size, delimiter) {
		if(array === null) {
			return [];
		}
		const availableSpaces = size - array.length;
		if(availableSpaces <= 0) {
			return array;
		}
		const pad = getPadArray(delimiter, availableSpaces);
		return [ ...array, ...pad ];
	}

	const escapedChars = [
		{character: "&", replacement: "&amp;"},
		{character: "<", replacement: "&lt;"},
		{character: ">", replacement: "&gt;"},
		{character: "\"", replacement: "&quot;"},
		{character: "'", replacement: "&#39;"},
	]

	helpful.escape = function(string) {
		if(string === null || typeof string !== 'string') {
			return string;
		}
		let result = string;
		for(let i = 0; i < escapedChars.length; i++) {
			result = result.replace(new RegExp(escapedChars[i].character, "g"), escapedChars[i].replacement);
		}
		return result;
	}

	helpful.unescape = function(string) {
		if(string === null || typeof string !== 'string') {
			return string;
		}
		let result = string;
		// Should unescape `&` character for last
		for(let i = escapedChars.length - 1; i >= 0; i--) {
			result = result.replace(new RegExp(escapedChars[i].replacement, "g"), escapedChars[i].character);
		}
		return result;
	}

	helpful.mergeObjects = function(object1, object2) {
		if(object1 === null) {
			return object2;
		}
		if(object2 === null) {
			return object1;
		}
		let keys1 = Object.keys(object1);
		let keys2 = Object.keys(object2);
		let returnObject = {};
		for(let i = 0; i < keys2.length; i++) {
			returnObject[keys2[i]] = object2[keys2[i]];
		}
		for(let i = 0; i < keys1.length; i++) {
			returnObject[keys1[i]] = object1[keys1[i]];
		}
		return returnObject;
  }
  
  helpful.partitionArray = function(array, func) {
		let pass = [];
		let notPass = [];
		pass = array.filter(function(item) {
			return func(item);
		});
		notPass = array.filter(function(item) {
			return !func(item);
		});
		return [pass, notPass];
	}

	helpful.partitionObject = function (obj, func) {
		let obj1 = {};
		let obj2 = {};
		for(let key in obj) {
			if (func(key, obj[key])) {
				obj1[key] = obj[key];
			}else {
				obj2[key] = obj[key];
			}
		}
		return [obj1, obj2];
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

	return helpful;
}));
