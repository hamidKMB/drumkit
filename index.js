for (var i = 0; i < document.querySelectorAll(".drum").length; i++ ) {

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var thisInnerHTML = this.innerHTML

    makeSound(thisInnerHTML);

    makeAnimation(thisInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
  console.log(event);

  makeSound(event.key);

  makeAnimation(event.key);
});

function makeSound(h) {
    switch (h) {
      case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
          break;

          case "s":
              var tom3 = new Audio("sounds/tom-3.mp3");
              tom3.play();
            break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
              break;

              case "j":
                  var snare = new Audio("sounds/snare.mp3");
                  snare.play();
                break;

                case "k":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                  break;

                  case "l":
                      var kickBase = new Audio("sounds/kick-bass.mp3");
                      kickBase.play();
                    break;

      default:console.log(this.innerHTML);
  }
}

function makeAnimation(currentKey){

  var keyPressed = document.querySelector("." + currentKey);

  keyPressed.classList.add("pressed");

  setTimeout(function(){
    keyPressed.classList.remove("pressed");
  }, 100);
}
