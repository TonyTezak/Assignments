//Write a function that takes an array of numbers and returns the largest 
//(without using Math.max())

let arr = [20, 7, 29, 25];

  function bigNumber(numSoFar){
      
    let bigForNow = numSoFar[0];
    for (let i = 0; i < numSoFar.length; i++){
            if (numSoFar[i]> bigForNow){
                bigForNow = numSoFar[i]
                return bigForNow;
            }
            }
        }
console.log(bigNumber(arr))

//Write a function that takes an array of words and a character and returns 
//each word that has that character present.


//lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

const lettersWithStrings = ("#3", "$$$", "C%4!", "Hey!", "!13d")

function findIt(arr, char){
    const finalArr = [];
    for(i = 0; i < arr.length; i++){
        if (arr[i].includes(char)){
            finalArr.push(arr[i]);
        }
    }
    return finalArr;
}
const hasIt = findIt(lettersWithStrings, "!")
console.log (hasIt);

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1, num2){
    if (num1 % num2 === 0){
        console.log("true")
}else{
    console.log("false")
}
}

isDivisible(4, 2)
isDivisible(9, 3)
isDivisible(15, 4)
