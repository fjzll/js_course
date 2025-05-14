// Objects
// key values pairs in curly braces
const myObj = {name: "Dave"}
console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["eat", "sleep"],
    beverage: {
        morning: "Coffee",
        after: "tea"
    },
    action: function(){
        return "Hello World!";
    }
};
console.log(anotherObj.hobbies);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());

const vehicle ={
    wheels: 4,
    engine: function(){
        return "Vrrooom!";
    }

}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){ return "Whooch!" };
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);

tesla.engine = function(){ return "Shhhhh" };
console.log(tesla.engine());

//keys

const bands ={
    vocals: 'Rob',
    guitar: "Jimmy",
    bass: 'John',
    drums: 'Bonham'
};

console.log(Object.keys(bands))
console.log(Object.values(bands));

for (let job in bands){
    console.log(`On ${job}, it is ${bands[job]}!`);
}

delete bands.drums;
console.log(bands.hasOwnProperty("drums"));

// destructuring objects

const { guitar} = bands;
console.log(guitar);

