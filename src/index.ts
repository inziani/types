let hat = { name: 'Hat', price: 100 };
let gloves = { name: 'Gloves', price: 75 };
let umbrella = {name: 'umbrella', price: 500};
// let product = [hat, gloves, umbrella];
let product: {name: string, price: number}[] = [hat, gloves, umbrella];

product.forEach(prod =>
  console.log(`${prod.name}: ${prod.price}`));

  // Using Object Shape Type Annotations
  