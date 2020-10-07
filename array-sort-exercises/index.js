// 1) Sort an array from smallest number to largest

const numArray = [1, 3, 5, 2, 90, 20]

numArray.sort((a, b) => a - b);
console.log(numArray)

// 2) Sort an array from largest number to smallest

numArray.sort((a, b) => b - a);
console.log(numArray);

// 3) Sort an array from shortest string to longest

const unhappyCamper = ["dog", "wolf", "by", "family", "eaten"];

unhappyCamper.sort((a, b) => a.length - b.length)
console.log(unhappyCamper);

// 4) Sort an array alphabetically

unhappyCamper.sort()
console.log(unhappyCamper)

// 5) Sort the objects in the array by age
const byAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

byAge.sort(function(a,b){
    return a.age - b.age
})

console.log(byAge)