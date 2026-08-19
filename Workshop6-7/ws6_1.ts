class Employee{
    private _firstName: string;
    private _lastName: string;
    
    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName(): string{
        return `${this._firstName} ${this._lastName}`;
    }
    set fullName(name: string){
        const [firstName, lastName] = name.split(" ");
        this._firstName = firstName;
        this._lastName = lastName;
    }
}
const emp1 = new Employee("ชาคริต", "เสือคล้าย");
console.log(emp1.fullName); 
emp1.fullName = "John Doe";
console.log(emp1.fullName); 
