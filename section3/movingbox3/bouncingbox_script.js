let distanceTop = 300;
let distanceLeft = 150;
let element; // delcar element as a vaiable
// const element = document.getElementById("movingBox");
const maxDistanceTop = 550;
const maxDistanceLeft = 1120;
let movementX;
let movementY;

function doOnload() {
	element = document.getElementById("movingBox");
	document.getElementById("startBtn").addEventListener("click", start);
	document.getElementById("stopBtn").addEventListener("click", stop);
}

function start() {
	console.log("Start function called.");
	bounceRight();
	bounceDown();
}

function stop() {
	clearInterval(movementX);
	clearInterval(movementY);
}

function bounceRight() {
	movementX = setInterval(moveRight, 5);
}

function stopX() {
	console.log("Stop function called.");
	clearInterval(movementX);
}

function moveRight() {
	if (distanceLeft < maxDistanceLeft) {
		distanceLeft++;
		element.style.left = distanceLeft + "px";
	} else {
		stopX();
		bounceLeft();
	}
}

function bounceLeft() {
	movementX = setInterval(moveLeft, 5);
}

function moveLeft() {
	if (distanceLeft > 0) {
		distanceLeft--;
		element.style.left = distanceLeft + "px";
	} else {
		stopX();
		bounceRight();
	}
}

function bounceDown() {
	movementY = setInterval(moveDown, 5);
}

function stopY() {
	clearInterval(movementY);
}

function moveDown() {
	if (distanceTop < maxDistanceTop) {
		distanceTop++;
		element.style.top = distanceTop + "px";
	} else {
		stopY();
		bounceUp();
	}
}

function bounceUp() {
	movementY = setInterval(moveUp, 5);
}

function moveUp() {
	if (distanceTop > 0) {
		distanceTop--;
		element.style.top = distanceTop + "px";
	} else {
		stopY();
		bounceDown();
	}
}
