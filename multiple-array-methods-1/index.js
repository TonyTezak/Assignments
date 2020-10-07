var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function bigUmbrella(people){

const oldEnough = people.filter(function(person){
        if (person.age >= 18){
            return person;
}
})
//console.log(oldEnough)        

const nowIKnowMyABCs = oldEnough.sort(function(a, b){
    return a.lastName.localeCompare(b.lastName);
})
    
//console.log(nowIKnowMyABCs)


const rollCall = nowIKnowMyABCs.map(function(person){

    if (person.age >= 18){
         return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>"
     }
    })
    return rollCall
 //console.log(rollCall)
}
console.log(bigUmbrella(peopleArray))