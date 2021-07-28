var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//detecting clicks
for ( i=0; i < numberOfDrumButtons ; i++) {
    document.querySelectorAll( "button" )[i].addEventListener( "click", function() {
        buttonInnerHTML = this.innerHTML;

        makeSound ( buttonInnerHTML );
        animatePress( buttonInnerHTML );
    });
}

// detecting key board press
document.addEventListener("keydown", function (event ) {
    var pressedKey = event.key;
    
    makeSound( pressedKey );
    animatePress( pressedKey );
})

function makeSound (key) {

    switch ( key ) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
        default:
            console.log(key);
    }

}

function animatePress ( button ) {

document.querySelector("." + button).classList.add("pressed");
setTimeout( function() {
    document.querySelector("." + button).classList.remove("pressed");
}, 200);

}
