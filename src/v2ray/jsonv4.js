"use strict";

import {V2RayLogObjectV4} from "./logger.js";
import {V2RayDnsObjectV4} from "./dns.js";

let V2RayJSONv4 = class {
	constructor(conf) {
		this.log = new V2RayLogObjectV4(conf?.log);
		this.dns = new V2RayDnsObjectV4(conf?.dns);
	};
};

export {
	V2RayJSONv4
};
