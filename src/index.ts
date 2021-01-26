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

let prices: number[] = [100, 75, 42];
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

});
// working with arrays