const formAdd = document.addition;
formAdd.addEventListener("submit", function(event){
event.preventDefault();
let addFirst = parseInt (formAdd.addFirst.value);
let addSecond = parseInt (formAdd.addSecond.value);
formAdd.addFirst.value = "";
formAdd.addSecond.value = "";
const seeAdd = document.createElement('h1')
seeAdd.textContent = addFirst + addSecond;
document.getElementById('plus').append(seeAdd);
})

const formSub = document.subtract;
formSub.addEventListener("submit", function(event){
event.preventDefault();
let subFirst = parseInt (formSub.subFirst.value);
let subSecond = parseInt (formSub.subSecond.value);
formSub.subFirst.value = "";
formSub.subSecond.value = "";
const seeSub = document.createElement('h1')
seeSub.textContent = subFirst - subSecond;
document.getElementById('minus').append(seeSub);

})

const formMult = document.multiply;
formMult.addEventListener("submit", function(event){
event.preventDefault();
let multFirst = parseInt(formMult.multFirst.value);
let multSecond = parseInt(formMult.multSecond.value);
formMult.multFirst.value = "";
formMult.multSecond.value = "";
const seeMult = document.createElement('h1');
seeMult.textContent = multFirst * multSecond;
document.getElementById('times').append(seeMult);

})