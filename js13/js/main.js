// Functions

// Methods = Built-in Functions
"Dave".toLowerCase();
Math.random();

// Function Declaration syntax

/*
function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(2, 5));*/



function getUserNameFromEmail(email) {
    return email.slice(0,email.indexOf("@"));
}

console.log(getUserNameFromEmail("playone@somerandomemail.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("dave"));