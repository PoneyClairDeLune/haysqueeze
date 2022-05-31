"use strict";

document.querySelector("textarea").addEventListener("blur", function () {
	let json = JSON.parse(this.value)
	self.v2Obj = new V2RayJv4(json);
	console.info(v2Obj);
});
