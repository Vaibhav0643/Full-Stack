// Dates

let newdate = Date();
// console.log(newdate);

let myDate = new Date();

// console.log(myDate);
// console.log("toString --> ", myDate.toString());
// console.log("toDateString --> ", myDate.toDateString());
// console.log("toISOString  --> ", myDate.toISOString());
// console.log("toJSON  --> ", myDate.toJSON());
// console.log("toLocaleDateString  --> ", myDate.toLocaleDateString());
// console.log("toLocaleString  --> ", myDate.toLocaleString());
console.log("toTimeString --> ", myDate.toTimeString());
// console.log(typeof myDate);

console.log(
  "-------------------------------------------------------------------"
);
//! in Javascript months starts from 0--> Jan
let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); //YYYY-MM-DD HH-MIN
// let myCreatedDate = new Date("2023-01-14");     //YYYY-MM-DD
// let myCreatedDate = new Date("01-14-2023"); //MM-DD-YYYY
// console.log(myCreatedDate.toLocaleString());

console.log(
  "-------------------------------------------------------------------"
);

let myTimeStamp = Date.now();

// console.log(myTimeStamp); // in millisec
// console.log(myCreatedDate.getTime()); // in millisec
// console.log(Math.floor(Date.now() / 1000)); //in sec

console.log(
  "-------------------------------------------------------------------"
);

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    hour: "2-digit",
    minute: "numeric",
  })
);
