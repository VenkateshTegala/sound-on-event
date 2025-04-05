//for mouse click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var alphabet = this.innerHTML;
        makeSound(alphabet);
        activate(alphabet);
    });
}

//for keyboard click
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    activate(event.key);
})

function makeSound(input) {
    switch(input) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log("default");
    }
}

function activate(input) {
    var activeButton = document.querySelector("." + input);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

