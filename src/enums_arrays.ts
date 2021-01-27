// working with arrays

function calTax(amount: number): number{
  return amount * 1.2;
}

function writePrice(product: string, price: number): void{ console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hatPrice = 100;
let glovesPrice = 75;
let umbrellaPrice = 42;

writePrice('Hat',calTax(hatPrice));
writePrice('Gloves',calTax(glovesPrice));
writePrice('Umbrella',calTax(umbrellaPrice));

let prices: number []  = [100, 75, 42];
let names: string[]= ['Hat', 'Gloves', 'Umbrella']

writePrice(names[0], calTax(prices[0]));
writePrice(names[1], calTax(prices[1]));
writePrice(names[2], calTax(prices[2]));

prices.forEach((price: number, index: number) => {
  writePrice(names[index], calTax(price));
});

let myFam: string [] = ['Val', 'Sophia', 'Malakai'];

myFam.forEach(function(value){
  console.log(value);

prices.forEach(function(price: number, index: number){
  writePrice(names[index], calTax(price));
});

});


let vri: string = 'Programme manager and Software Engineer'

function professionally(experienceSkills: string): void{
  console.log(`I am Valentine Robai Inziani, an experienced ${vri}`) };

professionally('Who are you?');

// Working with Tuples

let estate: [string, number] = ['Dandora', 3000];
let car: [string, number] = ['Mercedes', 6000];

writePrice(estate[0], estate[1])

estate.forEach((e: string  | number ) => {
  if (typeof e === 'string'){
    console.log(`String: ${e}`)
  }
  else { console.log(`Number: ${e.toFixed(3)}`)}
});

//  Using enums

enum Product  { 'Hat', 'Gloves', 'Umbrella'}

let products : [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75], [Product.Umbrella, 200]];

products.forEach((prod: [Product, number]) => {
  switch (prod[0]){
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

products.forEach((prod: [Product, number]) => {
  console.log(`Items, ${prod}`)
}
);

let productValue: Product = 0;
let productName: string = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}, ItemValue: ${products[0]}`);

enum otherEnum { First = 10, Second = 20};
enum OtherProduct {Hat = otherEnum.First + 1, Glove = otherEnum.Second + 2}

// Using string enums

enum City{ London = 'London', Paris = 'Paris', NY = 'New York'};

console.log(`City: ${City.London}`)

const enum Products {'Hat', 'Gloves', 'Umbrella'};
let prodValue = Product.Hat;
let prodName = Product[0];

console.log(`${prodValue}, ${prodName}`);

// Literal values
let restrictedValues : 1 | 2 | 3 = 3;
console.log(`Value: ${restrictedValues}`);

// Use Literal  values in functions

function calculatePrice(quanty: 1 | 2, price: number){
  return quanty * price;
}

let total = calculatePrice(1, 19.99);

console.log(`Price: ${total}`);

function getRandomValue(): 1 | 2 | 3 | 4{
  return Math.floor(Math.random() * 4) + 1 as 1 | 2 | 3 | 4;
};