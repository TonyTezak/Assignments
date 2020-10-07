var header = document.getElementById("header")

header.style.textAlign = "center"
header.style.color = "white"
header.style.backgroundColor = "green"

var partyColor = document.getElementById("partyColor")

partyColor.style.textAlign = "left"
partyColor.style.color = "white"
partyColor.style.backgroundColor = "blue"

var magicBox = document.getElementById("box1")
magicBox.addEventListener("mouseover", hover)
magicBox.addEventListener("mouseout", unhover)
magicBox.addEventListener("mousedown", mousedown)
magicBox.addEventListener("mouseup", mouseup)
magicBox.addEventListener("dblclick", twoClick)
window.addEventListener("scroll", citrus)
document.body.addEventListener("keydown", forColor)
document.body.addEventListener("keyup", forNoColor)

function hover() {
    magicBox.style.backgroundColor = "blue"
}

function unhover(){
    magicBox.style.backgroundColor = "initial"
}

function mousedown() {
    magicBox.style.backgroundColor = "red"
}

function mouseup (){
    magicBox.style.backgroundColor = "yellow"
}

function twoClick (){
    magicBox.style.backgroundColor = "green"
}

function citrus () {
    magicBox.style.backgroundColor = "orange"
}

//var keyColor = event.which;

function forColor (){
    if (event.keyCode === 66) {
        magicBox.style.backgroundColor = "blue";
        console.log("blue");
    }else if (event.keyCode === 82) {
        magicBox.style.backgroundColor = "red";
        console.log("red");
    }else if (event.keyCode === 89) {
       magicBox.style.backgroundColor = "yellow";
       console.log("yellow");
    }else if (event.keyCode  === 71) {
        magicBox.style.backgroundColor = "green";
        console.log("green");
    }else if (event.keyCode === 79){
        magicBox.style.backgroundColor = "orange";
        console.log("orange")
}
}

//Without the following function, clicking the box made it turn blue...and stay blues

function forNoColor (){
    magicBox.style.backgroundColor = "initial"
} 

/*function forColor () {
switch ("keypress") {
    case keypress = 66:
        magicBox.style.backgroundColor = "blue"
        break;

    case keypress = 82:
        magicBox.style.backgroundColor = "red"
        break;
        
    case keypress = 89:
        magicBox.style.backgroundColor = "yellow"
        break;
        
    case keypress = 71:
        magicBox.style.backgroundColor = "green"
        break;
        
    case keypress = 79:
        magicBox.style.backgroundColor = "orange"    
}
}*/

