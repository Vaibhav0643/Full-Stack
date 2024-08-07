const user = {
  name: "Vaibhav",
  email: "vaibhav@google.com",
};

function print(user) {
  console.log(user);
}

// print(user);

//global scope
var c = 30;

{
  //Block scope
  let a = 40;
  let b = 50;
  c = 34;
}

// console.log(c);
// console.log(this);
// console.log(globalThis);

function one() {
  console.log(this);
}

// one();

//! Immediately Invoked Function Expressions (IIFE)

// (function printName() {
//   console.log("Hello");
// })();

// ((name) => {
//   console.log(`Hello ${name}`);
// })("Vaibhav");

// printName();

//---------------------------
//! Control Statement
// if (2 !== "2") {
//   console.log("Executed");
// }

// const power = "fly";
// console.log(power);
// power = "bird";
// console.log(power);

//=--------------------------------------
// const key = 4;
// switch (key) {
//   case 4:
//     console.log("case1");
//   case 2:
//     console.log("case2");
//   case 3:
//     console.log("case3");

//   default:
//     console.log("Defualt case");
//     break;
// }

//==============================================
// Iterations

const array = [1, 23, 4, 5, 6, 7, 7];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // console.log(element);
}

//---------------
// Map == Unique value

const map1 = new Map();
map1.set("IN", "India");
map1.set("USA", "United State of America");
map1.set("FN", "France");
map1.set("IN", "India");
// console.log(map1);

// for (const [key, value] of map1) {
//   console.log(key, " --> ", value);
//   console.log(key + " --> " + value);
//   console.log(`${key} --> ${value}`);
// }

//--------------------------------
//array.reduce()

// const array1 = [1, 2, 3, 4, 5, 6];

// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => {
//   console.log(`Accumulator : ${accumulator} , Current value : ${currentValue}`);
//   return accumulator + currentValue;
// }, initialValue);

// console.log(sumWithInitial);

//----------------------------------------------------------------------

const obj = {
  username: "Vaibhav",
  email: "vaibhav@gmail.com",
  price: 99,
  welcomeMeassage: function () {
    console.log(`${this.username}, Welcome to website`);
  },
};

// obj.welcomeMeassage();

const arrow = () => {
  console.log("hello world");
};

arrow = () => {
  console.log("hello ");
};

arrow();
