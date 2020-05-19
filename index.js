// document.querySelector("button").addEventListener("click", handleClick);

var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

      // find a variant of each button for the switch statement
      var buttonInnerHTML = this.innerHTML;

      // switch expression is the thing we 'switch on' so it knows what to look at for each 'case'
      switch (buttonInnerHTML) {
        case 'w':
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
          break;

        case 'a':
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
          break;

        case 's':
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;

        case 'd':
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
          break;

        case 'j':
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;

        case 'k':
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
          break;

        case 'l':
          var audio = new Audio('sounds/crash.mp3');
          audio.play();
          break;

        default: console.log(buttonInnerHTML);

      }

    });
}

// testing keydown function
document.addEventListener("keydown", function () {
  alert("keypress");
});
