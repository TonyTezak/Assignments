var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphaCaps = alphabet.toUpperCase()
var alphaSplit = alphaCaps.split("")

function forception(people, alphaSplit){
 for(i = 0; i < people.length; i++){
     console.log(people[i])
     for (j = 0; j < alphaSplit.length; j++){
     console.log(alphaSplit[j])
        }
    }
}
forception(people, alphaSplit)
