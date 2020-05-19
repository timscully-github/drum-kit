// !!!
// detecting button press
var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

      // find a variant of each button for the switch statement
      var buttonInnerHTML = this.innerHTML;

      // use variant innerHTML from each button to be the key we use for the switch statement
      makeSound(buttonInnerHTML);

    });
}


// !!!
// attaching what has been pressed to the function

// we can add event to the function parameter to show which event triggered the eventlistener, in this case which key was pressed
// we can find 'key' as a property of event if we check in the console
document.addEventListener("keydown", function (event) {

    // using the event keydown key to be the parameter of the key used for the switch statement once buttons have eventlisteners attached
    makeSound(event.key);

});


// !!!
// using what we've pressed in a switch statement to give an output
function makeSound(key) {
    // switch expression is the thing we 'switch on' so it knows what to look at for each 'case'
    switch (key) {
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
}
