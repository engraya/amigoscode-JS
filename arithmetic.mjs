import * as mod from './namedExports.mjs'
import { PI, g } from './physics.mjs';

let addition = mod.addNumbers(2,7);
let subtraction = mod.subtractNumbers(2,7);
let multiplication = mod.multiplyNumbers(2,7);
let division = mod.divideNumbers(2,7);


console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);


var area = function(radius) {
    return PI * radius * radius;
}


let cirlceArea = area(7);
console.log(cirlceArea);


var force = function(mass) {
    return mass * g;
}

let bodyForce = force(100);
console.log(bodyForce);