// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return animals; 
}

collectAnimals ("dog", "cat", "mouse", "jackolope", "platypus"); 

console.log (collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables};
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"])

console.log(combineFruit(["apple", "pie"], ["cake", "pie"], ["carrit"]))
    
// Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }

  console.log(parseSentence(vacation));

//   Use destructuring to make this code ES6:

function returnFirst(items){
    const firstItem = [items]; /*change this line to be es6*/
    return firstItem
}

// Write destructuring code to assign variables that will help us return the expected string. 
// Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(){
    const [firstFav, secondFav, thirdFav] = favoriteActivities;
    return `My top three favorite activities are ${firstFav} , ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites())

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
// You will need to change how the arrays are passed in. 
// You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(...moreAnimals) {  
    return moreAnimals;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

console.log (combineAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// Try to make the following function more ES6xy:

// function product(...shorter) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

// Make the following function more ES6xy. Use at least both the rest and spread operators:

function unshift(array, ...otherArray) {  
  return [...otherArray, ...array];
}

// Write some destructuring code to help this function out. Use object literals to simplify it:

function populatePeople(names){
  return names.map(function(name){
      name = name.split(" ");
      // your code
      return {
          firstName: firstName,
          lastName: lastName
      }
  })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]