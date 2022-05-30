"use strict";

import {
	V2RayListDomains,
	V2RayListIPs
} from "./utils.js";

let V2RayDnsHosts = class {
	constructor(conf) {
		if (conf) {
			Object.entries(conf).forEach(function (e) {
				this[e[0]] = e[1];
			});
		};
	};
	addEntry(host, ip) {
		if (!this[host]) {
			this[host] = ip;
		} else if (this[host].constructor == Array) {
			if (this[host].indexOf(ip) == -1) {
				this[host].push(ip);
			};
		} else {
			this[host] = [this[host], ip];
		};
		return this;
	};
	removeEntry(host, ip) {
		delete this[host];
		return this;
	};
};
let V2RayDnsServers = class extends Array {
	constructor(conf) {
		super();
		if (conf?.length) {
			conf.forEach(function (e) {
				switch (e.constructor) {
					case String: {
						this.push(e);
						break;
					};
					default: {
						break;
					};
				};
			});
		};
	};
};
let V2RayDnsObjectV4 = class {
	constructor(conf) {
		this.hosts = new V2RayDnsHosts(conf?.hosts);
		this.servers = new V2RayDnsServers(conf?.servers);
	};
};

export {
	V2RayDnsObjectV4
};
