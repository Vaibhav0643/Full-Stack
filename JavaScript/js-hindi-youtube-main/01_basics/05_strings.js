const name = "hitesh";
const repoCount = 50;

//Don't use this syntax to write or concatenate strings
// console.log(name + repoCount + " Value");

//STring Interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.at(-2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4); //--> upperbound not included in O/P
// Substring --> no negative values
// console.log(newString);

const anotherString = gameName.slice(-8, 4); //--> support negative values
// console.log(anotherString);

const newStringOne = "   hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());
// trim --> Read documentation

const url = "https://hitesh.com/hitesh%20choudhary";

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));
