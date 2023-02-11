const fs = require("fs");
const path = require("path");
const { log } = require("./logs.js");

let cache = {};

function configValid() {
	if(cache === {}) {
		return false;
	}
	return true;
}

function getConfig() {
	const config = require(path.join(__dirname + "/../znciscript.js")).config;
	cache = config;
	return cache;
}

function getValue(key) {
	if(configValid() === true) {
		return cache[key];
	}
	return log("Config is not valid")
}

module.exports = {
	getConfig,
	getValue
}