"use strict";

import {
	V2RayListCombined,
	V2RayListDomains,
	V2RayListIPs
} from "./utils.js";

let V2RayRoutingRule = class {
	type = "field";
	network = "tcp,udp";
	constructor(conf) {
		this.domainMatcher = conf?.domainMatcher || this.domainMatcher;
		this.domains = new V2RayListDomains(conf?.domains);
		this.ip = new V2RayListIPs(conf?.ip);
		this.port = conf?.port;
		this.source = new V2RayListIPs(conf?.source);
		this.sourcePort = conf?.sourcePort;
		this.user = new V2RayListCombined(conf?.user);
		this.inboundTag = new V2RayListCombined(conf?.inboundTag);
		this.protocol = new V2RayListCombined(conf?.protocol);
		this.outboundTag = conf?.outboundTag;
		this.balancerTag = conf?.balancerTag;
		this.rsid = conf?.rsid || conf?.id;
	};
};
let V2RayRoutingRules = class extends Array {
	listIDs() {
		let ids = [];
		this.forEach(function (e, i) {
			if (e.rsid) {
				ids[i] = e.rsid;
			};
		});
		return ids;
	};
	index(id) {
		return this.listIDs().indexOf(id);
	};
	get(id) {
		return this[this.index(id)];
	};
	delete(id) {
		let foundIndex = this.index(id);
		if (foundIndex > -1) {
			this.splice(foundIndex, 1);
		};
	};
	constructor(conf) {
		super();
		let upThis = this;
		conf?.forEach(function (e) {
			upThis.push(new V2RayRoutingRule(e));
		});
	};
};
let V2RayRoutingObjectV4 = class {
	domainStrategy = "AsIs";
	domainMatcher = "mph";
	constructor(conf) {
		this.domainStrategy = conf?.domainStrategy || this.domainStrategy;
		this.domainMatcher = conf?.domainMatcher || this.domainMatcher;
		this.rules = new V2RayRoutingRules(conf?.rules);
		//this.balancers = new V2RayRoutingBalancers(conf?.balancers);
	};
};

export {
	V2RayRoutingObjectV4
};
