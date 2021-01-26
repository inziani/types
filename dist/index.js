function calTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hatPrice = 100;
let glovesPrice = 75;
let umbrellaPrice = 42;
writePrice('Hat', calTax(hatPrice));
writePrice('Gloves', calTax(glovesPrice));
writePrice('Umbrella', calTax(umbrellaPrice));
let prices = [100, 75, 42];
let names = ['Hat', 'Gloves', 'Umbrella'];
writePrice(names[0], calTax(prices[0]));
writePrice(names[1], calTax(prices[1]));
writePrice(names[2], calTax(prices[2]));
prices.forEach((price, index) => {
    writePrice(names[index], calTax(price));
});
let myFam = ['Val', 'Sophia', 'Malakai'];
myFam.forEach(function (value) {
    console.log(value);
});
