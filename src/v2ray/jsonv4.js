"use strict";

import {TrimmedJsonRoot} from "./utils.js"
import {V2RayLogObjectV4} from "./logger.js";
import {V2RayDnsObjectV4} from "./dns.js";
import {V2RayRoutingObjectV4} from "./routing.js";
import {V2RayIoManager} from "./io.js";

let V2RayJSONv4 = class extends TrimmedJsonRoot {
	constructor(conf) {
		super();
		this.log = new V2RayLogObjectV4(conf?.log);
		this.dns = new V2RayDnsObjectV4(conf?.dns);
		this.routing = new V2RayRoutingObjectV4(conf?.routing);
		this.inbounds = new V2RayIoManager("in", conf?.inbounds);
		this.outbounds = new V2RayIoManager("out", conf?.outbounds);
	};
};

export {
	V2RayJSONv4
};
