declare type Woman = {
    id: string;
    name: string;
    city: string;
};
declare let data: Woman[];
declare class Employee {
    readonly id: string;
    name: string;
    dept: string;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let salesEmployee: Employee;
declare let classData: (Woman | Employee)[];
declare class Mom {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
}
declare class Baby extends Mom {
    id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let anotherData: Mom[];
declare abstract class Furniture {
    id: string;
    name: string;
    constructor(id: string, name: string);
    getDetails(): string;
    abstract getSpecificDetails(): string;
}
declare class Chair extends Furniture {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    getSpecificDetails(): string;
}
declare class Table extends Furniture {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
    getSpecificDetails(): string;
}
declare class Stool extends Furniture {
    readonly id: string;
    name: string;
    city: string;
    companyName: string;
    constructor(id: string, name: string, city: string, companyName: string);
    getSpecificDetails(): string;
}
declare let info: Furniture[];
interface SchoolClass {
    name: string;
    getDetails(): string;
}
interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}
declare class Premier implements SchoolClass {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    getDetails(): string;
}
declare class SchoolDogs implements SchoolClass, DogOwner {
    readonly id: string;
    name: string;
    city: string;
    dogName: string;
    constructor(id: string, name: string, city: string, dogName: string);
    getDetails(): string;
    getDogDetails(): string;
}
