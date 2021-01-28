declare let hat: {
    name: string;
    price: number;
};
declare let gloves: {
    name: string;
    price: number;
};
declare let umbrella: {
    name: string;
    price: number;
};
declare let sweater: {
    name: string;
    price: number;
    waterproof: boolean;
};
declare let product: {
    name: string;
    price: number;
}[];
declare enum Feature {
    Waterproof = 0,
    Insulated = 1
}
declare let productTwo: {
    name: string;
    price?: number;
    waterproof?: boolean;
    hasFeature?(Feature: any): boolean;
}[];
declare let boots: {
    name: string;
    price: number;
    hasFeature: (feature: any) => boolean;
};
declare enum Features {
    Durable = 0,
    ChildFriendly = 1
}
declare type Toys = {
    name: string;
    price?: number;
    hasFeatures?(Features: any): boolean;
};
declare let ball: {
    name: string;
    price: number;
};
declare let bike: {
    name: string;
    price: number;
};
declare let trucks: {
    name: string;
    price: number;
    hasFeatures: (Features: any) => boolean;
};
declare type Toy = {
    id: number;
    name: string;
    price?: number;
};
declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare type UnionType = {
    id: number | string;
    name: string;
};
