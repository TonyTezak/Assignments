const readline = require("readline-sync")

let num1 = readline.question("Please enter your first number: ");
let num2 = readline.question("Please enter your second number: ");
let whichOp = readline.question("Please enter the operation to perform = add, sub, mul, div: ");

switch (whichOp) {
    case "add":
        var addAns=Number(num1) + Number(num2);
        console.log("The result is: " + addAns);
        break;
    case "sub":
        var subAns=Number(num1) - Number(num2);
        console.log("The result is: " + subAns);
        break;
    case "mul":
        var mulAns=Number(num1) * Number(num2);
        console.log("The result is: " + mulAns);
        break;
    case "div":
        var divAns=Number(num1) / Number(num2);
        console.log("The result is: " + divAns);
}

/*if (whichOp = "add") {
    var addAns=Number(num1) + Number(num2);
    console.log("The result is: " + addAns);
}else if (whichOp = "sub") {
    var subAns=Number(num1) - Number(num2);
    console.log("The result is: " + subAns);
}else if (whichOp = "mul") {
    var mulAns=Number(num1) * Number(num2);
    console.log("The result is: " + mulAns);
}else if (whichOp = "div") {
    var divAns=Number(num1) / Number(num2);
    console.log("The result is: " + divAns);
}*/

/*}else if (whichOp = "mul") {
    console.log("The result is: " + Number(num1 * num2));
}else if (whichOp = "div") {
    console.log("The result is: " + Number(num1 / num2));
}*/