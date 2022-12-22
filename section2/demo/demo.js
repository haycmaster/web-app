function handleClick() {
  const element = document.getElementById("div1");
  
  if(element.style.visibility === "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
  

  console.log("element: ", element);
}

function doOnMouseOver() {
  const element = document.getElementById("div2");
  element.style.background = "red";

}