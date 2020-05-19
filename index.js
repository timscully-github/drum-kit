// document.querySelector("button").addEventListener("click", handleClick);

var noOfButtons = document.querySelectorAll("button").length;
for (var i = 0; i < noOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  alert("This is a click");
}
