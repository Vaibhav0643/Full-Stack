//global scope
//var c = 300

let a = 300;
if (true) {
  //Block Scope
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
  //var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);   //print c=30 cuz of 'var'. var does not support scope. Global c variable can be changed inside any scope

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)); //No Error

function addone(num) {
  return num + 1;
}

addTwo(5); // Error. Access before declaration
const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
