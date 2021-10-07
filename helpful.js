(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.returnExports = factory();
	}
}(typeof self !== 'undefined' ? self : this, function () {
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

	helpful.hex = {};

	/* Modified from https://github.com/TogaTech/tEnvoy  */
	helpful.hex.convertFromString = (string) => {
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
	helpful.hex.convertToString = (hex) => {
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
	helpful.hex.convertFromBytes = (bytes) => {
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
	helpful.hex.convertToBytes = (hex) => {
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