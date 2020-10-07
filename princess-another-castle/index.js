const readlineSync = require('readline-sync');
let gameActive = true;

readlineSync.question(`You've arrived just in time. We must save the Princess!!! (hit return)`)

class Player {
    constructor (name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar; 
    }

    set newName (name){
        this.name = name;
        return this.name;
    }

    set newStatus (status){
        this.status = status;
        return this.status;
    }
    
    set gotHit (status) {
        this.status = status;
        if (Player.newStatus = "Powered Up"){
            this.status === "Big"
        }else if (Player.newStatus = "Big"){
            this.status === "Small"
        }else if (Player.newStatus = "Small"){
            this.status === "Dead"}
        return this.status;
    }

    set gotPowerup (status) {
        this.status = status;
        if (Player.newStatus = "small"){
            this.status === "Big";
        }else if (Player.newStatus = "Big"){
            this.status === "Powered Up";
            console.log (`You got a STAR! But ${newName}, the Princess in in another castle!`)
            this.hasStar === true;
            gameActive = false;}
        return this.status;
    }

    set addCoins (totalCoins) {
        this.totalCoins = totalCoins += 1;
        return this.totalCoins;
        }
    }

Player.newName = "Mario";
Player.newStatus = "small";
Player.addCoins = 0;
Player.hasStar = false;

const bravePlayer = new Player(Player.newName, 0, "small", false)
    
    if (bravePlayer.status === "dead") {
        gameActive = false;
        console.log (`What a horrible way to die!`)
    }else{
        gameActive = true;
    }

function thatWasRandom (){
    const random = Math.floor(Math.random()*2)
    if (random === 0) {
        Player.gotHit();
    }else if (random === 1){
        Player.gotPowerup();
    }else if (random === 2){
        Player.addCoins();
    }
}


thatWasRandom();

const playGame =  setInterval(thatWasRandom, 2000, bravePlayer)

function print (){
console.log(`Name: ${Player.newName}`)
console.log (`Total Coins: ${Player.addCoins}`)
console.log(`Status: ${Player.newStatus}`)
console.log (`Has Star: ${Player.powerUp}`)
}

print()


//     print () 
        // prints to the console the name, totalCoins, status, and star properties. 
        // Make sure you make this look nice such as:

        // Name: Luigi,
        // Status: Small, etc, etc
        // console.log(`Name: ${this.name}`)
        // console.log(`Total Coins: ${this.totalCoins}`)
        // console.log (`Status: ${this.status}`)
        // console.log (`Star Properties: ${this.hasStar}`)

    
