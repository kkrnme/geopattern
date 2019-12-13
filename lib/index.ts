'use strict';

var Pattern = require('./pattern');

/*
 * Normalize arguments, if not given, to:
 * string: (new Date()).toString()
 * options: {}
 */
function optArgs(cb) {
	return (string, options) => {
		if (typeof string === 'object') {
			options = string;
			string = null;
		}
		if (string === null || string === undefined) {
			string = (new Date()).toString();
		}
		if (!options) {
			options = {};
		}

		return cb.call(this, string, options);
	};
}

var GeoPattern = module.exports = {
	generate: optArgs((string, options) => new Pattern(string, options))
};

