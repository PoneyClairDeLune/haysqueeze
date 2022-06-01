"use strict";

let V2RayIoRoot = class {};
let V2RayInboundObject = class extends V2RayIoRoot {};
let V2RayOutboundObject = class extends V2RayIoRoot {};
let V2RayIoManager = class extends Array {
	#manage = undefined;
	listTags() {};
	add() {};
	delete() {};
	constructor(basis, conf) {
		super();
		switch (basis) {
			case "in": {
				this.#manage = V2RayInboundObject;
				break;
			};
			case "out": {
				this.#manage = V2RayOutboundObject;
				break;
			};
			default: {
				throw(new Error("Unknown direction"));
				break;
			};
		};
	}
};

export {
	V2RayInboundObject,
	V2RayOutboundObject,
	V2RayIoManager
};
