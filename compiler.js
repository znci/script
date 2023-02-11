const config = require("./lib/readConfig.js");
const { log } = require("./lib/logs.js");

function loadConfig() {
	const conf = config.getConfig();
	const api = config.getValue("api");

	log(api.modules);
}
loadConfig();