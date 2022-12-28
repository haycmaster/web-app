let margTop = 0;
let margLeft = 0;

initLog();

function initLog() {
	console.log("margTop is :" + margTop);
	console.log("margLeft is :" + margLeft);
}

function moveReset() {
	const element = document.getElementById("movingDiv");
	element.style.marginLeft = "0px";
	element.style.marginTop = "0px";
	margTop = 0;
	margLeft = 0;
	console.log("The box returned to it's original position.");
}

function moveUp() {
	const element = document.getElementById("movingDiv");
	if (margTop != 0) {
		margTop -= 50;
		element.style.marginTop = margTop + "px";
		console.log("The box moved up.");
	}
}

function moveDown() {
	const element = document.getElementById("movingDiv");
	if (margTop != 550) {
		margTop += 50;
		element.style.marginTop = margTop + "px";
		console.log("The box moved down.");
	}
}

function moveLeft() {
	const element = document.getElementById("movingDiv");
	if (margLeft != 0) {
		margLeft -= 50;
		element.style.marginLeft = margLeft + "px";
		console.log("The box moved left.");
	}
}

function moveRight() {
	const element = document.getElementById("movingDiv");
	if (margLeft != 550) {
		margLeft += 50;
		element.style.marginLeft = margLeft + "px";
		console.log("The box moved down.");
	}
}
