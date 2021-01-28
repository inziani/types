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
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
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
