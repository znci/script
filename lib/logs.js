const time = require("fancy-time");
const chalk = require("chalk");

function log(text) {
	console.log(chalk.cyanBright(time.timeStr(text)));
}

module.exports = {
	log
}