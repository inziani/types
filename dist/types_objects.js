let hat = { name: 'Hat', price: 100 };
let gloves = { name: 'Gloves', price: 75 };
let umbrella = { name: 'umbrella', price: 500 };
let sweater = { name: 'Sweater', price: 300, waterproof: true };
// let product = [hat, gloves, umbrella];
let product = [hat, gloves, umbrella];
product.forEach(prod => console.log(`${prod.name}: ${prod.price}`));
// Using Object Shape Type Annotations
var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
;
let productTwo = [hat, gloves, umbrella, sweater];
productTwo.forEach(prod => console.log(`${prod.name}: ${prod.price} Waterproof: ${prod.waterproof}`));
//  Including Methods in Shapes Types
let boots = { name: 'Boots', price: 5600, hasFeature: (feature) => feature === Feature.Waterproof };
// Using Type aliases for shapes
var Features;
(function (Features) {
    Features[Features["Durable"] = 0] = "Durable";
    Features[Features["ChildFriendly"] = 1] = "ChildFriendly";
})(Features || (Features = {}));
;
let ball = { name: 'Ball', price: 200 };
let bike = { name: 'Bike', price: 250 };
let trucks = { name: 'Trucks', price: 7500, hasFeatures: (Features) => Features === Features.Durable };
