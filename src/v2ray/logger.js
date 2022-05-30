"use strict";

let V2RayLogObjectV4 = class {
	loglevel = "warning";
	constructor(conf) {
		this.loglevel = conf?.loglevel || this.loglevel;
		if (conf?.error) {
			this.error = conf.error;
		};
		if (conf?.access) {
			this.access = conf.access;
		};
	};
};

export {
	V2RayLogObjectV4
};
