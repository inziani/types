// working with arrays
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
    prices.forEach(function (price, index) {
        writePrice(names[index], calTax(price));
    });
});
let vri = 'Programme manager and Software Engineer';
function professionally(experienceSkills) {
    console.log(`I am Valentine Robai Inziani, an experienced ${vri}`);
}
;
professionally('Who are you?');
// Working with Tuples
let estate = ['Dandora', 3000];
let car = ['Mercedes', 6000];
writePrice(estate[0], estate[1]);
estate.forEach((e) => {
    if (typeof e === 'string') {
        console.log(`String: ${e}`);
    }
    else {
        console.log(`Number: ${e.toFixed(3)}`);
    }
});
//  Using enums
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 1] = "Gloves";
    Product[Product["Umbrella"] = 2] = "Umbrella";
})(Product || (Product = {}));
let products = [[Product.Hat, 100], [Product.Gloves, 75], [Product.Umbrella, 200]];
products.forEach((prod) => {
    switch (prod[0]) {
        case Product.Hat:
            writePrice('Hat', calTax(prod[1]));
            break;
        case Product.Gloves:
            writePrice('Gloves', calTax(prod[1]));
            break;
        case Product.Umbrella:
            writePrice('Umbrella', calTax(prod[1]));
            break;
    }
});
products.forEach((prod) => {
    console.log(`Items, ${prod}`);
});
