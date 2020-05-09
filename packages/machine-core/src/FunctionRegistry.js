const logger = require('./logger').create({ name: 'FunctionRegistry' });
// eslint-disable-next-line
const requireModule = async (path) => require(path);


let functionFactory;

const Functions = {
	core: {},
	additional: {},
	additionalHelp: {}
};

const registerCore = ({ functions = {}, FunctionFactory } = {}) => {
	Functions.core = Object.assign(Functions.core, functions);
	functionFactory = FunctionFactory;
};
const registerAdditional = ({ functions = {}, help = {} } = {}) => {
	Functions.additional = Object.assign(Functions.additional, functions);
	Functions.additionalHelp = Object.assign(Functions.additionalHelp, help);
};
const logError = (err, mod) => logger.error(`Failed to load module "${mod}"! Reason:\n${err.message}`);


const toName = (name) => ({ name });

class FunctionRegistry {
	static of() {
		return new FunctionRegistry();
	}

	getFunction(id = '') {
		id = id.toUpperCase();
		return Functions.core[id] || Functions.additional[id];
	}

	getFunctionDefinitions() {
		// currently we only need the names...
		return Object.keys(Functions.core).map(toName).concat(Object.keys(Functions.additional).map(toName));
	}

	getFunctionsHelp() {
		return Functions.additionalHelp;
	}

	hasFunction(id = '') {
		return !!this.getFunction(id);
	}

	registerCoreFunctionsModule(mod) {
		requireModule(mod).then(registerCore).catch((err) => logError(err, mod));
	}

	registerFunctionModule(mod) {
		requireModule(mod).then(registerAdditional).catch((err) => logError(err, mod));
	}

	registerFunctionDefinitions(definitions = []) {
		if (functionFactory) {
			const functions = definitions.reduce((fns, def) => {
				// stream functions do not overwrite already existing (additional) functions
				if (Functions.additional[def.name] == null) {
					const fn = functionFactory.createFrom(def);
					if (fn) fns[def.name] = fn;
				}
				return fns;
			}, {});
			registerAdditional({ functions });
		}
	}
}
module.exports = FunctionRegistry.of();
