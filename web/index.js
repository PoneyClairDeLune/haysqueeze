"use strict";

document.querySelector("textarea").addEventListener("blur", function () {
	let json = JSON.parse(this.value)
	console.info(new V2RayJv4(json));
});
