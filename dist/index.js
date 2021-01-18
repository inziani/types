"use strict";
let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 'Hello';
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);
function calaculateTax(amount) {
    return amount * 0.16;
}
console.log(`${12} = ${calaculateTax(12)}`);
console.log(`${'Hello'} = ${calaculateTax('Hello')}`);
console.log(`${'True'} = ${calaculateTax(true)}`);
