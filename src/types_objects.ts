let hat = { name: 'Hat', price: 100 };
let gloves = { name: 'Gloves', price: 75 };
let umbrella = {name: 'umbrella', price: 500};
let sweater = { name: 'Sweater', price: 300, waterproof: true};
// let product = [hat, gloves, umbrella];
let product: {name: string, price: number}[] = [hat, gloves, umbrella];

product.forEach(prod =>
  console.log(`${prod.name}: ${prod.price}`));

  // Using Object Shape Type Annotations
  enum Feature { Waterproof, Insulated};

  let productTwo: {name: string, price?: number, waterproof?: boolean, hasFeature?(Feature): boolean }[] = [ hat, gloves, umbrella, sweater ];
  
  productTwo.forEach(prod =>
    console.log(`${prod.name}: ${prod.price} Waterproof: ${prod.waterproof}`));

    //  Including Methods in Shapes Types

    

    let boots = { name: 'Boots', price: 5600, hasFeature: (feature) => feature === Feature.Waterproof};


    // Using Type aliases for shapes

    enum Features { Durable, ChildFriendly };

    type Toys =  { name: string, price?: number, hasFeatures? (Features): boolean };

    let ball = {name: 'Ball', price: 200};
    let bike = { name: 'Bike', price: 250};
    let trucks = { name: 'Trucks', price: 7500, hasFeatures:(Features) => Features === Features.Durable }

    // Type Union properties

    type Toy = { id: number, name: string, price?: number};

    type Person = { id: string, name: string, city: string};

    type UnionType = {id: number | string, name: string };




