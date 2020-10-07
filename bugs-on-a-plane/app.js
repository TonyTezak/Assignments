const form = document.getElementById("airline-form");
const getClick = document.getElementById("submit").addEventListener("click", formAlert);
var query = document.querySelector("#airline-form")

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }

    //document.getElementByID("submit").addEventListener("click", formAlert)
    confirm("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}
//formAlert()
submit.addEventListener("click", formAlert);

/* const form = form.getElementByID("airline-form");
const submit = form.getElementByID("submit").addEventListener("click", formAlert); */
//var query = document.querySelector()
