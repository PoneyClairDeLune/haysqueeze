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
		if (conf?.constructor == Array) {
			conf.forEach(function (e) {
				upThis.add(e);
			});
		};
	};
};
let V2RayListDomains = class extends V2RayListCombined {};
let V2RayListIPs = class extends V2RayListCombined {};
let TrimmedJsonRoot = class {
	stringify() {
		return JSON.stringify(this, function (key, value) {
			switch (value?.constructor) {
				case String:
				case Number:
				case Boolean: {
					return value;
					break;
				};
			};
			if (value == undefined) {
				return undefined;
			} else if (value?.length > 0) {
				return value;
			} else if (Object.keys(value).length > 0) {
				return value;
			};
			return undefined;
		});
	};
	constructor(obj) {
	};
};

export {
	V2RayListCombined,
	V2RayListDomains,
	V2RayListIPs,
	TrimmedJsonRoot
};
