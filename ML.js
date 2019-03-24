class moduleLoader {
	constructor(path) {
		this.path = []
		this.functions = []
		this.path.push(path);
		this.functions = require(path);
		this.fkeys = Object.keys(this.functions);
	}
	adder(path) {
		this.path.push(path);
		this.functions = Object.assign(this.functions, require(path));
		this.fkeys = Object.keys(this.functions);
		return this;
	}
	funcs() {
		console.log(this.functions);
	}
	Callfunc(func, ...args) {
		if (this.fkeys.includes(func) == true)
			this.functions[func](...args);
	}

}

module.exports.ModuleLoader = moduleLoader;