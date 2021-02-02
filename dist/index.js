"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person('Sophia Robai', 'Parklands'), new dataTypes_1.Person('Malaka Inziani', 'Parklands')];
let products = [new dataTypes_1.Product('Running Shoes', 100), new dataTypes_1.Product('Hat', 25)];
[...people, ...products].forEach(item => console.log(`Item: ${item.name}`));
