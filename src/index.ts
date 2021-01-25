let myVar;
console.log(`${myVar} = ${typeof myVar}`)

myVar = 12;
console.log(`${myVar} = ${typeof myVar}`)
myVar = 'Hello';
console.log(`${myVar} = ${typeof myVar}`)
myVar = true;
console.log(`${myVar} = ${typeof myVar}`)

function calaculateTax(amount: number): number{
  return amount * 0.16;
}

function calculateTaxInclusive (amount: any): any{
  return `$${(amount * 1.16).toFixed(2)}`
}

let price = 100;
let taxAmount: number = calaculateTax(price);
let halfShare = (taxAmount/2).toFixed(2);

console.log(`${12} = ${calaculateTax(12)}`);
// console.log(`${'Hello'} = ${calaculateTax('Hello')}`);
// console.log(`${'True'} = ${calaculateTax(true)}`);

console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
console.log(`Tax Inclusive price: ${calculateTaxInclusive(120)}`);

function newCalculateTax(amount: number, format: boolean): string | number{
  const calcAmount = amount * 1.2;
  return format ? `$${calcAmount.toFixed(2)}` : calcAmount;

}

let taxNumber = <number> newCalculateTax(100, false);
let taxString = newCalculateTax(100, true) as string;

console.log(`Number Value:  ${typeof taxNumber}, ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${typeof taxString} ${taxString.charAt(0)}`);

//Using a type guard