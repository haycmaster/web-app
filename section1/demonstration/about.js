function testBtnClick() {

  const element = document.getElementById("homeIconDivAAA");
  // element: null

  console.log("element: ", element);

  if (!!element) {
    element.style.display = "none";
  } else {
    console.log("element is null, please check your code");
  }
  
  // null.style.display

}