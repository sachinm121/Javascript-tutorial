//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sachin",
    age: 25,
}

const myFunction = function(){ // datatype: object function 
    console.log("Hello world");
}

console.log(typeof anotherId);

//**************************************************** */

// Stack (Primitive), Heap(Non-Primitive)

let name = "sachin"
let anothername = name

anothername = "Mahor"

console.log(anothername)
console.log(name)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Sachin@gmail.com"

console.log(userOne)
console.log(userTwo)