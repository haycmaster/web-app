function moveTopLeft() {
	const element = document.getElementById("displayBox");
	element.style.justifyContent = "start";
	element.style.alignContent = "start";
	console.log("The box moved to the top left.");
}

function moveTopRight() {
	const element = document.getElementById("displayBox");
	element.style.justifyContent = "end";
	element.style.alignContent = "start";
	console.log("The box moved to the top right.");
}

function moveBottomLeft() {
	const element = document.getElementById("displayBox");
	element.style.justifyContent = "start";
	element.style.alignContent = "end";
	console.log("The box moved to the bottom left.");
}

function moveBottomRight() {
	const element = document.getElementById("displayBox");
	element.style.justifyContent = "end";
	element.style.alignContent = "end";
	console.log("The box moved to the bottom right.");
}

function moveCenter() {
	const element = document.getElementById("displayBox");
	element.style.justifyContent = "center";
	element.style.alignContent = "center";
	console.log("The box moved to the center.");
}
