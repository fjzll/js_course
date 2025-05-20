// Fetch API requires a discussion of
// Callbacks, Promises, Thenables, and Async/Await

//Callbacks
/*function firstFunction(parameters, callback) {
    //do stuff
    callback();
}

// AKA "callback hell"
firstFunction(para, function(){
    //do stuff
    secondFunction(para, function(){
        thirdFunction(para, function(){
        });
    });
});*/

// Promises

// 3 states: Pending, Fulfilled, Rejected

/*const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error){
        resolve("Yes! resolved the promised!");
    }
    else{
        reject("No! rejected the promise!")
    }
})*/

/*
console.log(myPromise);

myPromise.then(value => {
    return value + 1;
})
.then(newValue =>{
    console.log(newValue);
})
.catch(err =>{
    console.error(err);
})*/

/*const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("myNextPromise resolved!")
    }, 3000);
})

myNextPromise.then(value =>{
    console.log(value);
});

myPromise.then(value =>{
    console.log(value);
})

const users = fetch("https://jsonplaceholder.typicode.com/users");*/

// pending
/*console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
    console.log(response);
    return response.json()
    })
    .then(data =>{
    /!*    console.log(data);*!/
        data.forEach((user) => {
            console.log(user);
        })
    })*/

//Async / Await
/*const myUsers = {
    userList: []
}

async function myCoolFunction(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
/!*    console.log(jsonUserData);*!/
    return jsonUserData;
}

/!*myCoolFunction();*!/

const anotherFunction = async ()=>{
    const data = await myCoolFunction();
    /!*console.log(data);*!/
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunction();
console.log(myUsers.userList);*/


// Workflow Function
const getAllUserEmails = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map(user => user.email);
    //console.log(userEmailArray);
    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails();

// 2nd parameter of Fetch is a object
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
}
getDadJoke();

const jokeObject = {
    "id": "ea2TnGBXnrc",
    "joke": "They laughed when I said I wanted to be a comedian – they’re not laughing now.",
}
const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

postData(jokeObject);


/*const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&
    lastName=${lastName}&limitTo=[nerdy]`);
    const jsonResponse = await response.json();
    console.log(jsonResponse.value.joke);
}

requestJoke("Dave", "Joke");*/


// abstract into functions
// maybe from a form
const getDataFromForm = () => {
    const requestOjb = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestOjb;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&
    limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

// Procedural workflow function - pulls everything together
const processJokeRequest = async() => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished!");
}

processJokeRequest();