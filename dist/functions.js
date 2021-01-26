function calculateTax(amount, discount) {
    return (amount * 1.2) - (discount || 0);
}
let taxValue1 = calculateTax(100, 9);
// console.log(`Total Amount: ${taxValue1}`);
console.log(`1 Arguements: ${taxValue1}`);
let taxValue2 = calculateTax(100);
console.log(`2 Arguements: ${taxValue2}`);
let taxValue3 = calculateTax(100, 10);
console.log(`3 Arguements: ${taxValue3}`);
let taxValues = calculateTax(100);
//  Using a rest parameter
function taxCalcRestPar(amount, discount, ...extraFees) {
    return (amount * 1.2) - (discount || 0) + extraFees.reduce((total, val) => total + val, 0);
}
let newTaxVal = taxCalcRestPar(100, 0);
console.log(`2 args: ${newTaxVal}`);
newTaxVal = taxCalcRestPar(100);
console.log(`1 args: ${newTaxVal}`);
newTaxVal = taxCalcRestPar(100, 10, 20);
console.log(`3 args: ${newTaxVal}`);
newTaxVal = taxCalcRestPar(100, 10, 20, 1, 30, 7);
console.log(`3 args: ${newTaxVal}`);
//  Void Functions
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
writeValue('Malakai', 200);
writeValue('Tax Value:', taxCalcRestPar(100, 0));
// Overloading function types
