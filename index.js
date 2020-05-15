var noOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",
    function () {
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    });
}
