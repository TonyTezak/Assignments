let goombaAddFinal = 0
let bobOmbAddFinal = 0
let cheepCheepAddFinal = 0

const goombaAdd = document.payMeGoomba;
goombaAdd.addEventListener("submit", function(event){
    event.preventDefault();
    let goombaCoin = parseInt (goombaAdd.goomba.value);
    //goombaAdd.goomba.value = "";
    const goombaPrice = document.createElement('h3')
    goombaAddFinal = goombaCoin * 5;
    goombaPrice.textContent = goombaAddFinal;
    updateTotal();
    document.getElementById('goombaMoney').append(goombaPrice);
    //document.getElementById('totalMoney').append(goombaPrice);
})

const bobOmbAdd = document.payMeBobOmb;
bobOmbAdd.addEventListener("submit", function(event){
    event.preventDefault();
    let bobOmbCoin = parseInt (bobOmbAdd.bobOmb.value);
    //bobOmbAdd.bobOmb.value = "";
    const bobOmbPrice = document.createElement('h3')
    bobOmbAddFinal = bobOmbCoin * 7;
    bobOmbPrice.textContent = bobOmbAddFinal;
    document.getElementById('bobOmbMoney').append(bobOmbPrice);
    updateTotal();
    //document.getElementById('totalMoney').append(bobOmbPrice);
})

const cheepCheepAdd = document.payMeCheep;
cheepCheepAdd.addEventListener("submit", function(event){
    event.preventDefault();    
    let cheepCheepCoin = parseInt (cheepCheepAdd.cheepCheep.value);
    //cheepCheepAdd.cheepCheep.value = "";
    const cheepCheepPrice = document.createElement('h3')
    cheepCheepAddFinal = cheepCheepCoin * 11;
    cheepCheepPrice.textContent = cheepCheepAddFinal;
    document.getElementById('cheepCheepMoney').append(cheepCheepPrice);
    updateTotal();
    //document.getElementById('totalMoney').append(bobOmbPrice);
})

// const goombaPrice = document.getElementById("goombaMoney");
// const bobOmbPrice = document.getElementById("bobOmbMoney");
// const cheepCheepPrice = document.getElementById("cheepCheepMoney");



function updateTotal(){
    const totalAdd = goombaAddFinal + bobOmbAddFinal + cheepCheepAddFinal;
    document.getElementById("finalCost").innerText = totalAdd;
}



// const bobOmbAdd = document.payMe;
// bobOmbAdd.addEventListener("submit", function(event){
// event.preventDefault();

// })

// const formAdd = document.addition;
// formAdd.addEventListener("submit", function(event){
// event.preventDefault();
// let addFirst = parseInt (formAdd.addFirst.value);
// let addSecond = parseInt (formAdd.addSecond.value);
// formAdd.addFirst.value = "";
// formAdd.addSecond.value = "";
// const seeAdd = document.createElement('h1')
// seeAdd.textContent = addFirst + addSecond;
// document.getElementById('plus').append(seeAdd);
// })