console.time("process")
// Console log and all its variations
console.log("1 this is just a string")
console.log('String with single quotations')

// Logging a variable
let str = "This is a variable 5"
let number = 7
console.log(str)

// Printing a variable by replacing it with %d in the variable
console.log("variable with d percentage symbol %d",number)

// Printing a variable by replacing it with %s in a atring
console.log("string with s percentange symbol %s", str)

// concatenation
console.log("test " + "this")

// CREATING A NEW CONSOLE
const fs = require("fs")
const {Console} = require("console")
const output = fs.createWriteStream("./stdout.log")
const err = fs.createWriteStream("./stderr.log")

const print = new Console(output, err)
const string = "tHISI is a string"
print.log("logging ", string)
print.log("stdout.log has this data")


// console.clear()
    // This will clear the console

console.clear()

// console.count
    // This will count the data and update the value of the key.

console.count("shiny")
console.count("jenner")
console.count("shiny")
console.count("Random")
console.count("random")
console.count("default")
console.count()
console.countReset("random")


// console.error()
    // This will error out the given, The first argument is primary and the rest are substitutional

let a = 5
let b = 7

if (a%2 == 0 && b%2 == 0){
    console.log("Divided by 2")
}
else{
    console.error("Modulus Error: ", "not divisible by 2")
}


// console.warn()
    // error() and warn are having different classifications


if (a%2 == 0 && b%2 == 0){
    console.log("Divided by 2")
}
else{
    console.warn("Modulus Warn: ", "not divisible by 2")
}


// console.time() and console.timeEnd()
    // They go together start and end of time can be measured
    // I'm writing console.time("process") at the beginning

console.timeEnd("process")