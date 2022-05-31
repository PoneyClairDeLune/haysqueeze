"use strict";

let V2RayListCombined = class extends Array {
	add(e) {
		if (this.indexOf(e) == -1) {
			this.push(e);
		};
		return this;
	};
	delete(e) {
		let foundIndex = this.indexOf(e);
		if (foundIndex > -1) {
			this.splice(foundIndex, 1);
		};
		return this;
	};
	constructor(conf) {
		super();
		let upThis = this;
		if (conf.constructor == Array) {
			conf.forEach(function (e) {
				upThis.add(e);
			});
		};
	};
};
let V2RayListDomains = class extends V2RayListCombined {};
let V2RayListIPs = class extends V2RayListCombined {};

export {
	V2RayListCombined,
	V2RayListDomains,
	V2RayListIPs
};
