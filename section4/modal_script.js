let modalBox;
let visibility;

function doOnload() {
  modalBox = document.getElementById("modalWindow");
  document.getElementById("openModalBtn").addEventListener("click", turnOnVisibility);
  document.getElementById("closeButtonManual").addEventListener("click", turnOffVisibility);
  document.getElementById("closeButton").addEventListener("click", turnOffVisibility);
  const saveBtn = document.getElementById("modalWindowBtn");
  saveBtn.addEventListener("click", (event) => saveBtnClicked(event));
}

function turnOnVisibility() {
  // console.log("The button was pressed.");
  visibility = modalBox.style.display;
  if (visibility = "none") {
    visibility = "flex";
    modalBox.style.display = visibility;
    // console.log("The modal window function activated.")
  }
}

function turnOffVisibility() {
  // console.log("The exit button was pressed.")
  if (visibility = "flex") {
    visibility = "none";
    modalBox.style.display = visibility;
    // console.log("End of exit function.");
  }
}

function garyBackGroundDivClicked() {
  console.log('In garyBackGroundDivClicked 555')
  turnOffVisibility()
}


function saveBtnParentDivClicked(evt) {
  console.log('In saveBtnParentDivClicked 111')
  evt.stopPropagation();
}

function saveBtnClicked(evt) {
  console.log("'Save' button clicked. 000");
  evt.stopPropagation();
  // turnOffVisibility();
}