// document.querySelector("button").addEventListener("click", handleClick);

var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      this.style.color = "#fff";
      // console.log(this.innerHTML);

    });
}

// var audio = new Audio('sounds/kick-bass.mp3');
// audio.play();
