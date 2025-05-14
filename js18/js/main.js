// Classes
/*class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    get pizzaCrust(){
        return this.crust;
    }
    set pizzaCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    }
    setToppings(topping){
        this.toppings.push(topping);
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`);
    }
}*/
/*


const myPizza = new Pizza("pepperoni", "small");
myPizza.pizzaCrust = "thin";
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());*/

class Pizza {
    constructor(pizzaSize) {
        this._size = pizzaSize; //intended to be private
        this._crust = "original";
    }
    getCrust(){
        return this._crust;
    }
    setCrust(pizzaCrust){
        this._crust = pizzaCrust;
    }
}

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();


// Factory Function
function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    };
}
const myPizza = pizzaFactory("small");
myPizza.bake();