// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const heyNumbers = [3, 6, 8, 2]

const fiver = heyNumbers.filter(num => num >= 5)
console.log(fiver)

// 2) Given an array of numbers, return a new array that only includes the even numbers.

const evens = heyNumbers.filter(num => num % 2 === 0)
console.log(evens)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const canineCamping = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveLetters = canineCamping.filter(dog => dog.length <= 5)
console.log(fiveLetters)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const bigKidTable = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const areTheyBigKids = bigKidTable.filter(grownup => grownup.member === true)

// (function(grownup){
//     if (grownup.member === true){
//         return true
//     }
// })

console.log(areTheyBigKids)

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const wannaSeeMatrix = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const oldEnough = wannaSeeMatrix.filter(buyPopcorn => buyPopcorn.age >= 18)
console.log(oldEnough)