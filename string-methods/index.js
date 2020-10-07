//Make a function that will return any given string into 
//all caps followed by the same string all lowercase.
var capilizeAndLowercase = ("Hello") // => "HELLOhello"

function goHighGoLow(){
var upperHello = capilizeAndLowercase.toUpperCase()
 console.log(upperHello)
 var lowerHello = capilizeAndLowercase.toLowerCase()
 console.log(lowerHello)
 var bothHello = upperHello.concat(lowerHello)
 console.log(bothHello)
}

goHighGoLow()

 //Make a function that returns a number half the length, 
 //and rounded down. You'll need to use Math.floor().

var findMiddleIndex = "Hello"

function letsDivide(){
    for (i = 0; i < findMiddleIndex.length; i++){
        //console.log(findMiddleIndex.length)
        var halfIndex = (findMiddleIndex.length)/2
        //console.log(halfIndex)
        var mathOnTheFloor = Math.floor(halfIndex)
        console.log(mathOnTheFloor)
    }
}

letsDivide(findMiddleIndex) 

//Make a function that uses slice() and the other functions 
//you've written to return the first half of the string

function sliceItInHalf(){
    var halfSlice = Math.floor(findMiddleIndex.length / 2);
    var newSlice = findMiddleIndex.slice(0, halfSlice)
    console.log(newSlice)
}
sliceItInHalf()

//Make a function that takes a string and returns that string where 
//the first half is capitalized, and the second half is lower cased.

//hint: If the half way point is a decimal, or rather, your string 
//length is odd. Use Math.floor to round down.

var soBrave = ("Brave Brave Sir Robin")
var braveFirst = soBrave.slice(0, Math.floor(soBrave.length/2))
    console.log(braveFirst)
var braveLast = soBrave.slice(Math.floor(-soBrave.length/2))
    console.log(braveLast)

function capLower(){
    var runAway = braveFirst.toUpperCase()
    console.log(runAway)
    var bravelyFled = braveLast.toLowerCase()
    console.log(bravelyFled) 
   var alwaysBrave = runAway.concat(bravelyFled)
    console.log(alwaysBrave)
}

capLower()
