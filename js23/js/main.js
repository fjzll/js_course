// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have type window. It is implied

/*window.alert("OK!");
alert("OK!");*/

/*
window.alert(window.location);
alert(location)*/

const myObject = {
    name: "dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function(){
        console.log(this.name);
    }
}

const myArray = ["eat", "sleep", "code"];

/*sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));*/
sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
/*localStorage.removeItem("mySessionStore");
localStorage.clear();*/
const key = localStorage.key(0);
const storeLength = localStorage.length;
const myLocalData = JSON.parse(sessionStorage.getItem("myLocalStore"));
console.log(myLocalData);
console.log(key);
console.log(storeLength);
