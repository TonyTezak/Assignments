const readline = require("readline-sync")

let gameOver = false;
/*let hasKey = false;*/

let intro = readline.question("You run into a room. The only way out is a door. There is a hole in the wall near the door. What do you do? (Hit return) ")
let choice1 = readline.question("1 = Put your hand in the hole. 2 = Find the key. 3 = Open the door. ")

switch (choice1) {
    case '1':
            console.log("Murder hornets! You just died.")
            gameOver = true;
            break;
    case '2':
        var choice2 = readline.question("The key is on a chain around your neck! Now what would you like to do? 1=Place key in hole in the wall. 2=Place key in door lock. 3=Look for key")
    console.log(choice2);    
        switch (choice2) {
            case '1':
            console.log("Murder hornets! You just died.")
            break;
            case '2':
            console.log("You fit the key in the door lock, and with a click the door opens. You escape!")
            break;
            case '3':
            console.log("Try what you already have in your hand first...")
            }
            gameOver = true;
            break;
    case '3':
            console.log("That would be too easy. You need to find the key.");
            gameOver = true;        
}


/*if (choice1 = '1'){
        console.log("Murder hornets! You just died");
        /*gameOver = true;
        hasKey = false;
}else if (choice1 = '2'){
    var choice2 = readline.question("The key is on a chain around your neck! Now what would you like to do? 1=Place key in hole in the wall. 2=Place key in door lock. 3=Look for key")
    console.log(choice2);    
        switch (choice2) {
            case '1':
            console.log("Murder hornets! You just died.")
            break;
            case '2':
            console.log("You fit the in the door lock, and with a click the door opens. You escape!")
            break;
            case '3':
            console.log("Try what you already have in your hand first...")
            /*gameOver = true;
            hasKey = true;
        }
}else if (choice1 =='3'){
        console.log("That would be too easy. You need to find the key.");
        /*gameOver = true;
        hasKey = false;*

/*if (choice1 != '2'){
    var oops = function(choice1){
        switch (choice1) {
            case '1':
                console.log("Murder hornets! You just died");
                break;
           case '3':    
            console.log("That would be too easy. You need to find the key.");
        }
    }
}else{ 
    var yes = function(choice2){
    switch (choice2) {
        case '1':
        console.log("Murder hornets! You just died.")
        break;
        case '2':
        console.log("You fit the in the door lock, and with a click the door opens. You escape!")
        break;
        case '3':
        console.log("Try what you already have in your hand first...")
        }
    }
}

switch (choice2) {
            case '1':
            console.log("Murder hornets! You just died.")
            break;
            case '2':
            console.log("You fit the in the door lock, and with a click the door opens. You escape")
            break;
            case '3':
            console.log("Try what you already have in your hand first...")
        }


if (choice="1") {
    console.log("Murder hornets! You just died")
}else if (choice="2"){
    console.log("Around your neck you see a chain holding the metal rod the wandering elf gave you last year. He told you it would open doors for you. You fit it in the door lock, and with a click theh door opens. You escape!")
}else if (choice="3"){
    console.log("That would be too easy. You need to find the key.")
} */