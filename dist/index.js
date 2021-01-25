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
function calculateTaxInclusive(amount) {
    return `$${(amount * 1.16).toFixed(2)}`;
}
let price = 100;
let taxAmount = calaculateTax(price);
let halfShare = (taxAmount / 2).toFixed(2);
console.log(`${12} = ${calaculateTax(12)}`);
// console.log(`${'Hello'} = ${calaculateTax('Hello')}`);
// console.log(`${'True'} = ${calaculateTax(true)}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
console.log(`Tax Inclusive price: ${calculateTaxInclusive(120)}`);
function newCalculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxNumber = newCalculateTax(100, false);
let taxString = newCalculateTax(100, true);
console.log(`Number Value:  ${typeof taxNumber}, ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${typeof taxString} ${taxString.charAt(0)}`);
//Using a type guard
