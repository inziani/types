// Classes and Interfaces

type Woman = {
  id:string,
  name: string,
  city: string

};

let data: Woman[] = [
  {id: 'bsmith', name: 'Betty Smith', city: 'London'},
  {id: 'ajones', name: 'Alice Jones', city: 'Paris'},
  {id: 'dpeters', name: 'Dora Peters', city: 'Nairobi'}
];

data.forEach(item => {
  console.log(`${item.id} ${item.name} ${item.city}`)
}

)

class Employee{
  // public readonly id: string;
  // public name: string;
  // private dept: string;
  // public city: string;

  constructor(public readonly id: string, public name: string, public dept: string, public city: string){
    // this.id = id;
    // this.name = name;
    // this.dept = dept;
    // this.city = city;
  }
  writeDept(){
    console.log(`${this.name}  works in the ${this.dept}`);
  }
}

let salesEmployee = new Employee('fvega', 'Fidel Vega', 'Sales', 'Paris');

let classData: (Woman | Employee)[] = [
  {id: 'bsmith', name: 'Betty Smith', city: 'London'},
  {id: 'ajones', name: 'Alice Jones', city: 'Paris'},
  {id: 'dpeters', name: 'Dora Peters', city: 'Nairobi'},
  salesEmployee
];

classData.forEach(item => {
  if (item instanceof Employee){
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

class Mom{
  constructor(public id: string, public name: string, public city: string){
  }
}

class Baby extends Mom{
  constructor(public id: string, public name: string, private dept: string, public city: string){
  super(id, name, city);
}

writeDept(){
  console.log(`${this.name} works in ${this.dept}`);
}
}

let anotherData = [new Mom('bsmith', 'Bob Smith', 'London'), new Baby('fvega', 'Fidel Vega', 'Sales', 'Paris') ];

anotherData.forEach(item => {
  console.log(`Person: ${item.name}, ${item.city}`);
  if(item instanceof Baby){
    item.writeDept();
  }
}
);

// Understanding Type Inferences for Subclasss