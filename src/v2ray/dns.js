"use strict";

import {
	V2RayListCombined,
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
		} else if (this[host].constructor == V2RayListCombined) {
			this[host].add(ip);
		} else {
			this[host] = new V2RayListCombined([this[host]]);
			this[host].add(ip);
		};
		return this;
	};
	removeEntry(host, ip) {
		if (this[host]?.constructor == V2RayListCombined && ip) {
			console.info(host, ip);
			this[host].delete(ip);
		} else {
			console.warn(host, ip);
			delete this[host];
		};
		return this;
	};
};
let V2RayDnsServerObject = class {
	port = 53;
	address = "127.0.0.1";
	skipFallback = false;
	constructor(conf) {
		this.port = conf?.port || this.port;
		this.address = conf?.address || this.address;
		this.clientIp = conf?.clientIp;
		this.skipFallback = conf?.skipFallback || this.skipFallback;
		if (conf?.domains) {
			this.domains = new V2RayListDomains(conf.domains);
		};
		if (conf?.expectIPs) {
			this.expectIPs = new V2RayListIPs(conf.expectIPs);
		};
	};
};
let V2RayDnsServers = class extends Array {
	constructor(conf) {
		super();
		let upThis = this;
		if (conf?.length) {
			conf.forEach(function (e) {
				switch (e.constructor) {
					case String: {
						upThis.push(e);
						break;
					};
					default: {
						upThis.push(new V2RayDnsServerObject(e))
						break;
					};
				};
			});
		};
	};
};
let V2RayDnsObjectV4 = class {
	queryStrategy = "UseIP";
	disableCache = false;
	disableFallback = false;
	constructor(conf) {
		if (conf?.hosts) {
			this.hosts = new V2RayDnsHosts(conf.hosts);
		};
		if (conf?.servers) {
			this.servers = new V2RayDnsServers(conf.servers);
		};
		this.clientIp = conf?.clientIp;
		this.queryStrategy = conf?.queryStrategy || this.queryStrategy;
		this.disableCache = conf?.disableCache || this.disableCache;
		this.disableFallback = conf?.disableFallback || this.disableFallback;
		this.tag = conf?.tag;
	};
};

export {
	V2RayDnsObjectV4
};
