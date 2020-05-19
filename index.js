// document.querySelector("button").addEventListener("click", handleClick);

var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

      // find a variant of each button for the switch statement
      var buttonInnerHTML = this.innerHTML;

      // switch expression is the thing we 'switch on'
      switch (buttonInnerHTML) {
        case 'w':
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
          break;
        default:

      }

    });
}

var audio = new Audio('sounds/kick-bass.mp3');
audio.play();
