// Classes and Interfaces
let data = [
    { id: 'bsmith', name: 'Betty Smith', city: 'London' },
    { id: 'ajones', name: 'Alice Jones', city: 'Paris' },
    { id: 'dpeters', name: 'Dora Peters', city: 'Nairobi' }
];
data.forEach(item => {
    console.log(`${item.id} ${item.name} ${item.city}`);
});
class Employee {
    // public readonly id: string;
    // public name: string;
    // private dept: string;
    // public city: string;
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
        // this.id = id;
        // this.name = name;
        // this.dept = dept;
        // this.city = city;
    }
    writeDept() {
        console.log(`${this.name}  works in the ${this.dept}`);
    }
}
let salesEmployee = new Employee('fvega', 'Fidel Vega', 'Sales', 'Paris');
let classData = [
    { id: 'bsmith', name: 'Betty Smith', city: 'London' },
    { id: 'ajones', name: 'Alice Jones', city: 'Paris' },
    { id: 'dpeters', name: 'Dora Peters', city: 'Nairobi' },
    salesEmployee
];
classData.forEach(item => {
    if (item instanceof Employee) {
        item.writeDept();
    }
    else {
        console.log(`${item.id} ${item.name} ${item.city}`);
    }
});
// Access control key words
// console.log(`Dept Value: ${salesEmployee.dept}`)
salesEmployee.writeDept();
//  Class Inheritance
class Mom {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}
class Baby extends Mom {
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
let anotherData = [new Mom('bsmith', 'Bob Smith', 'London'), new Baby('fvega', 'Fidel Vega', 'Sales', 'Paris')];
anotherData.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Baby) {
        item.writeDept();
    }
});
// Abstract class
class Furniture {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getDetails() {
        return `${this.name} , ${this.getSpecificDetails()}`;
    }
    ;
}
;
class Chair extends Furniture {
    constructor(id, name, dept, city) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    getSpecificDetails() {
        return `works in this ${this.dept}`;
    }
}
class Table extends Furniture {
    constructor(id, name, city, creditLimit) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
    getSpecificDetails() {
        return `has ${this.creditLimit}`;
    }
}
class Stool extends Furniture {
    constructor(id, name, city, companyName) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.city = city;
        this.companyName = companyName;
    }
    getSpecificDetails() {
        return `works for this firm - ${this.companyName}`;
    }
}
;
let info = [new Chair('srobai', 'Sophia Robai', 'Software Dev', 'Parklands'),
    new Table('mrobai', 'Malakai Inziani', 'Nyayo', 5000)];
info.push(new Stool('vrobai', 'Robai Inziani', 'SCB', 'Westlands'));
info.forEach(item => console.log(item.getDetails()));
class Premier {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}
class SchoolDogs {
    constructor(id, name, city, dogName) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.dogName = dogName;
    }
    ;
    getDetails() {
        return `${this.name} has a dog names is the name of our School`;
    }
    getDogDetails() {
        return `${this.name} has a dog names ${this.dogName}`;
    }
}
;
