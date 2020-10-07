const readlineSync = require('readline-sync');
let isAlive = true;

let intro = readlineSync.question("Welcome, Brave Friend, to the Scary Land of Preschool Nap Time (Hit Return) ");
const name = readlineSync.question("What is your name? ")

class Hero{
    constructor(name, hp){
        this.name = name;
        this.awake = hp;
        this.inventory = ['Fluffy the Naptime Bear'];

    }
}

class Enemy {
    constructor(msgOne, hp, msgTwo){
        this.msgOne = msgOne;
        this.awake = hp;
        this.msgTwo = msgTwo;
    }
}

const goPotty = new Enemy("Oh-oh...", 20, "You've gotta go potty");
const missMommy = new Enemy("Your eyes fill with tears", 30, "You miss your mommmmmYYYYYY");
const talkFriend = new Enemy("Your friend is awake.", 15, "Hey, wanna see my snail shell?"); 

const enemies = [goPotty, missMommy, talkFriend] 

const player = new Hero(name, 50);
let hiPlayer = readlineSync.question("Welcome " + player.name + "! You're tall. I like your shoes. (Hit Return) ");
let asideOne = readlineSync.question("Do you have a dog? I miss my mommy! (Hit Return)");
let setStage = readlineSync.question("Brave " + player.name + ", It's nap time. You're on your mat. (Hit Return)");

while(isAlive){
    //console.log(player);
    const choice = readlineSync.keyIn('Would you like to [w] wait up for Mommy, [p] Print Inventory, or [q] Quit?', {limit: 'wpq'})
    if (player.awake >= 125){
        console.log("You won! You're fast asleep....")
        isAlive = false;
        break
    }else if(player.awake <= 0){
        console.log("You are waking up your friends. Your teacher moved your mat near her. You lose.")
        isAlive = false;
        break
    }
    if(choice === 'w'){
        waitForMommy();
    }else if (choice === 'p'){
        printInventory();
    }else if (choice === 'q'){
        isAlive = false;
        console.log('You quit the game');
    }
}

function waitForMommy(){
    const random = Math.floor(Math.random()*6)
    if (random === 2){
        missMommyAttack();
    }else if (random === 4){
        goPottyAttack();
    }else if (random === 5){
        talkFriendAttack();
    }else{
        console.log('You are getting sleepy...')
        player.awake += 5;
    }
}


function printInventory(){
    console.log(player.inventory);
    console.log("Your awake points are " + player.awake)
}

function goPottyAttack(){
    console.log(goPotty.msgOne);
    console.log(goPotty.msgTwo);
const choice = readlineSync.keyIn("Do you want to [g] go to the bathroom, or [s] stay on your mat?", {limit: 'gs'}); 
if (choice === 'g'){
console.log("You feel better, but now you're wide awake!")
player.awake -= goPotty.awake;
} else if (choice === 's'){
    const random = Math.floor(Math.random()*3)
        if (random === 1){
            console.log("You wet your mat. Game over")
            isAlive = false;
        }else{
            console.log("You're ok. It's not that bad yet")
            player.awake += goPotty.awake - 10;
        }
    }
}

function missMommyAttack(){
    console.log(missMommy.msgOne);
    console.log(missMommy.msgTwo);
    const choice = readlineSync.keyIn("Do you want to [t] tell your teacher, [c] cry, or [s] try to sleep?", {limit: 'tcs'});
    if (choice === 't'){
    console.log("The teacher tells you, 'Mommy is coming!', and gives you a hug");
    player.inventory.push('hug'); 
    player.awake += missMommy.awake;
    }else if (choice === 'c'){
        const random = Math.floor(Math.random()*2)
        if (random === 0){
            console.log("The teacher tells you, 'Mommy is coming!', and gives you a hug");
            player.inventory.push('hug')
            player.awake += missMommy.awake - 15;
        }else if (random === 1){
            console.log("The teacher tells you, 'Mommy is coming, please rest your body.'");
            player.awake -= 15;
        }
    }else if (choice === 's'){
    console.log("Waiting is boring. Good night!");
    player.awake += 10;
    }
}

function talkFriendAttack(){
    console.log(talkFriend.msgOne);
    console.log(talkFriend.msgTwo);
const choice = readlineSync.keyIn("Do you want to [t] talk with your friend, or [s] try to sleep?", {limit: 'ts'});
if (choice === 't'){
    const random = Math.floor(Math.random()*3);
    if (random === 1){
        console.log("You don't get caught. Add snail shell to inventory.")
        player.inventory.push('snail shell')
    }else{
        console.log("The teacher tells you she is sad with your choice to talk.")
        player.awake -= talkFriend.awake;
    }
}
    
if (choice === 's'){
        console.log("Let your friend talk. Let them get in trouble. Good night!")
        player.awake += talkFriend.awake;
}
}

/* (1) Potty 
(a)choose [g] go = sleep points -10
(b)choose [w]
- 3/4 chance "It's not that bad yet" - sleep points +10
- 1/4 chance "You wet your mat. Game over" */

/* (2) Mommy
(a)choose [t] - Teacher says "Mommy is coming", add hug to inventory, sleep points +20
(b)choose [c] cry
- 2/4 chance teacher says "Mommy is coming" add hug to inventory, sleep points +10
- 2/4 chance teacher says "Mommy is coming, please rest your body" - sleep points -15
choose 
(c) choose [s] try to sleep - sleep points +10 */

/* (3) talkFriend
(a) choose [t] talk to friend
- 1/4 chance "You don't get caught", add snail shell to inventory
- 3/4 chance "The teacher is sad with your choice to talk", sleep points -20
(b) choose [s] try to sleep - sleep points +10 */




