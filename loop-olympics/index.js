// preliminaries

//1
for (var i = 0; i <= 9; i++){
    console.log(i)
}

//2
for (var i = 9; i >= 0; i--){
    console.log(i)
}

//3
var fruit = ["banana", "orange", "apple", "kiwi"]

for (i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

// bronze

//1
var newArray = []
for (var i = 0; i <= 9; i++){
    newArray.push(i);
    if (i === 9){
        console.log(newArray)
}
}

//2
for (var i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

//3
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var i = 0; i < fruit.length; i+=2){
    console.log(fruit[i])
}

//silver

//1
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  for (var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
  }

  //2

  /*var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  var names = []
  var jobs = []

 for (var i = 0; i < peopleArray.length; i++){
     names.push(peopleArray[i].name)
     jobs.push(peopleArray[i].occupation)
     console.log(names)    
     console.log(jobs)
     }*/
    

