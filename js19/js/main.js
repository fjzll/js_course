// JSON: JavaScript Objection Notation
const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
//JSON does not send functions
console.log(sendJSON);
console.log(typeof sendJSON);


const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
