var employees = []
console.log(employees)

function Employees(name, title, salary, status){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
    employees.push(this)
}

var employee1 = new Employees("Gordon Ramsey", "Donut Tester", "$1500/hr")
//console.log(employee1)

var employee2 = new Employees("Groot", "Greeter", "$2500/hr")
//console.log(employee2)

var employee3 = new Employees("Oscar the Grouch", "CFO", "1 dumpster/day", "Part-Time")
employee3.status = "Part-Time"
//console.log(employee3)

function printEmployeeForm(){
    console.log(employee1, employee2, employee3)
}
printEmployeeForm()

/*employees.push.apply(employees, employee1.textContent)
employees.push.apply(employees, employee2)
employees.push.apply(employees, employee3)*/

/* function addArray(employee1, employee2, employee3) {
    employees.push.apply(employee1, employee2, employee3);
} */

//addArray()

//var newDiv = document.createElement("div")
//newDiv.appendChild(employees.textContent)