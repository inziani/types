import { Person, Product } from "./dataTypes";

let people = [new Person('Sophia Robai', 'Parklands'), new Person('Malaka Inziani', 'Parklands')];

let products = [ new Product('Running Shoes', 100), new Product('Hat', 25)];


[...people, ...products].forEach(item => console.log(`Item: ${item.name}`));