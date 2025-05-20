// Modules
import plates from "./guitars.js";
/*import playGuitar from "./guitars.js";
import {shredding as shred, plucking as fingerpicking} from "./guitars.js";*/

import * as Guitars from "./guitars.js";
import User from "./user.js";

/*console.log(playGuitar());
console.log(shred());
console.log(fingerpicking());*/

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

const me = new User("email@email.com", "Dave");
console.log(me);
console.log(me.greeting());
