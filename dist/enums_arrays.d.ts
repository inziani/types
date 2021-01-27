declare function calTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare let hatPrice: number;
declare let glovesPrice: number;
declare let umbrellaPrice: number;
declare let prices: number[];
declare let names: string[];
declare let myFam: string[];
declare let vri: string;
declare function professionally(experienceSkills: string): void;
declare let estate: [string, number];
declare let car: [string, number];
declare enum Product {
    'Hat' = 0,
    'Gloves' = 1,
    'Umbrella' = 2
}
declare let products: [Product, number][];
declare let productValue: Product;
declare let productName: string;
declare enum otherEnum {
    First = 10,
    Second = 20
}
declare enum OtherProduct {
    Hat = 11,
    Glove = 22
}
declare enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York"
}
declare const enum Products {
    'Hat' = 0,
    'Gloves' = 1,
    'Umbrella' = 2
}
declare let prodValue: Product;
declare let prodName: string;
declare let restrictedValues: 1 | 2 | 3;
declare function calculatePrice(quanty: 1 | 2, price: number): number;
declare let total: number;
declare function getRandomValue(): 1 | 2 | 3 | 4;
