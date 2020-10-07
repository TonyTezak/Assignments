// 1) Turn an array of numbers into a total of all the numbers

const nums = [1, 2, 3]

const addNums = nums.reduce(function(final, nums){
    final += nums
    return final
})

console.log(addNums)

// 2) Turn an array of numbers into a long string of all those numbers.

const stringNums = nums.reduce(function(final, nums){
    final.push(nums)
    return final
}, [])

console.log(stringNums)

// 3) Turn an array of voter objects into a count of how many people voted

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const iVoted = voters.reduce(function(final, voter){
    if (voter.voted){
        final ++
    }
    return final
}, 0)

console.log(iVoted)

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const wishInOneHand = wishlist.reduce(function(final, wishes){
    final += wishes.price
    return final
}, 0)

console.log(wishInOneHand)

// 5) Given an array of arrays, flatten them into a single array

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const oneBigHappyArrayParty = arrays.reduce(function(final, array){
    final.push(array)
    return final
}, [])
console.log(oneBigHappyArrayParty)

// 6) Given an array of potential voters, return an object representing the results of the vote

const howManyVoted = voters.reduce(function(final, voter){

    if (voter.age >= 18 && voter.age <=25 && voter.voted){
    final.youthVoted ++
}

if (voter.age >= 18 && voter.age <=25){
    final.youthTotal ++
}

if (voter.age >= 26 && voter.age <= 35 && voter.voted){
    final.midVoted ++
}

if (voter.age >= 26 && voter.age <= 35){
    final.midTotal ++
}

if (voter.age >= 36 && voter.age <= 55 && voter.voted){
    final.primeLifeVoted ++
}

if (voter.age >= 36 && voter.age <= 55){
    final.primeLifeTotal ++
}

return final
}, {youthVoted: 0, youthTotal: 0, midVoted: 0, midTotal: 0, primeLifeVoted: 0, primeLifeTotal: 0})

console.log(howManyVoted)