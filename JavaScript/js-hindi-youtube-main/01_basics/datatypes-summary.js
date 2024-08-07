//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

// Datatypes of all non-primitive type --> object
//Datatype of function --> Object functions

//Array
const heros = ["shaktiman", "naagraj", "doga"];

// 2.Object
let myObj = {
  name: "hitesh",
  age: 22,
};

// 3.Functions
const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++
// Memory
// 1. Stack  (used in primitive type)
// 2. Heap    (used in Non-primitive type)
