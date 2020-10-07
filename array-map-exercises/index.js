// 1) Make an array of numbers that are doubles of the first array

const arr = [2, 5, 25, 100]

const doubleNumbers = arr.map(num => num * 2)

console.log(doubleNumbers)

// 2) Take an array of numbers and make them strings

const arrToo = [2, 5, 25, 100]

const stringItUp = arrToo.map(function(num){
    return num.toString();
})

console.log(stringItUp);

// 3) Capitalize each of an array of names

const capNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const capitalizeNames = capNames.map(function(toCap){
     return toCap.charAt(0).toUpperCase() + toCap.slice(1).toLowerCase();
})
console.log(capitalizeNames);

// 4) Make an array of strings of the names

const users = [
        {
            name: "Angelina Jolie",
            age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kayne West",
            age: 16
        },
        {
            name: "Bob Ziroll",
            age: 100
        }
    ]; 

    const namesOnly = users.map(function(user){
        return user.name;
    })
 console.log(namesOnly);

//  5) Make an array of strings of the names saying whether or not they can go to The Matrix


const hopeMatrix = [
        {
            name: "Angelina Jolie",
            age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kayne West",
            age: 16
        },
        {
            name: "Bob Ziroll",
            age: 100
        }
    ]

const canMatrix = hopeMatrix.map(function(user){
    if (user.age >= 21){
        console.log(user.name + " can go to the Matrix.")
    }else{
        console.log(user.name + " is under age!!")
    }
})

// 6) Make an array of the names in h1s, and the ages in h2s
// function readyToPutInTheDOM(arr){
//   // your code here
// }
const nameAge = [
        {
            name: "Angelina Jolie",
            age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kayne West",
            age: 16
        },
        {
            name: "Bob Ziroll",
            age: 100
        }
    ]
const readyToPutInTheDOM = nameAge.map(function(user){
    
    return "<h1>" + user.name + "</h1>" + "<h2>" + user.age + "</h2>"
    
})
console.log(readyToPutInTheDOM);

// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]