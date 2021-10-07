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

	return helpful;
}));