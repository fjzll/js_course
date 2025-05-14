// Arrays
const myArray = [];

// add elements to an array
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

// add to array
myArray.push("school");
console.log(myArray);

// remove from array
const lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

// add to the front of the array
myArray.unshift(42)
console.log(myArray);

// remove from the front of the array
myArray.shift();
console.log(myArray);

// delete from the array
myArray.splice(1, 1);
console.log(myArray);

// replace or insert a value in an array
myArray.splice(1, 1, 42);
console.log(myArray);

// Slice method
const secondArray = ['A', 'B', 'C', 'D', 'E', 'F'];

const newArray = secondArray.slice(2, 5);
console.log(secondArray);
console.log(newArray);

// reverse method
/*secondArray.reverse();
console.log(secondArray);*/

// Join method
const newString = secondArray.join();
const anotherNewArray = newString.split(",");
console.log(newString);
console.log(anotherNewArray);

// concat method
const myArrayA = ['A', 'B'];
const myArrayB = ['C', 'D'];
const concatArray = myArrayA.concat(myArrayB);
console.log(concatArray);

// ... sign
const spreadArray = [...myArrayA, ...myArrayB];
console.log(spreadArray);

// dimensional array
