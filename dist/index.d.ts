declare type Woman = {
    id: string;
    name: string;
    city: string;
};
declare let data: Woman[];
declare class Employee {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let salesEmployee: Employee;
declare let classData: (Woman | Employee)[];
