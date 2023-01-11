let modalBox;
let visibility;

function doOnload() {
  modalBox = document.getElementById("modalWindow");
  document.getElementById("openModalBtn").addEventListener("click", turnOnVisibility);
  document.getElementById("closeButtonManual").addEventListener("click", turnOffVisibility);
  document.getElementById("closeButton").addEventListener("click", turnOffVisibility);
  document.getElementById("modalWindowBtn").addEventListener("click", modalWindowFunction);
}

function turnOnVisibility() {
  console.log("The button was pressed.");
  visibility = modalBox.style.display;
  if (visibility = "none") {
    visibility = "flex";
    modalBox.style.display = visibility;
    console.log("The modal window function activated.")
  }
}

function turnOffVisibility() {
  console.log("The exit button was pressed.")
  if (visibility = "flex") {
    visibility = "none";
    modalBox.style.display = visibility;
    console.log("End of exit function.");
  }
}

function modalWindowFunction() {
  alert("You pressed the 'Save' button! The modal will now close.");
  turnOffVisibility();
}