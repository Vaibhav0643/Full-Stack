// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// null--> means empty  not 0 not undefined

// Comparision and Assignment operators works differently
// Comparison operators convert null to a number, treating it as 0
console.log(null > 0); // --> 0>0
console.log(null == 0);
console.log(null >= 0); // --> 0>=0

console.log(undefined == 0); //-->False
console.log(undefined > 0); //-->False
console.log(undefined < 0); //-->False

// ===
// Check the datatype also
console.log("2" === 2);
