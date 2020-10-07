const form = document.travelFun;
const getClick = document.getElementById("clickHere").addEventListener("click", formAlert);

form.addEventListener("submit", (event) => {
event.preventDefault();
})

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const checkedInputs = [];
//     for(let i = 0; i < form.diet.length; i++){
//         if(form.diet[i].checked){
//             checkedInputs.push(form.diet[i].value);
//         }
//     }
    //console.log(checkedInputs);
// })

function formAlert(){
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const age = form.age.value;
  const gender = form.gender.value;
  const where = form.city.value;
  const eat = [];
  for(let i = 0; i < form.diet.length; i++){
    if(form.diet[i].checked){
        eat.push(form.diet[i].value);
    }
}
  confirm("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + where + "\nDiet: " + eat + "\nHave an ok flight!");
}