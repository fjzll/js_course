//Strings
const myNumber = 42;

const myFloat = 42.01;

const myString = "42.123abc";

console.log(myNumber);
console.log(myFloat);
console.log(Number(myString)===myNumber);
console.log(Number.parseFloat(myString).toFixed(2));

//Nan is an acronym for Not a Number

console.log(isNaN("Dave"));