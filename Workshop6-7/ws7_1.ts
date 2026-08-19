export {};

class Staff {
    constructor(public name: string, public salary: number) {}
    getDetails(): string {
        return `Name: ${this.name}, Salary: $${this.salary}`;
    }
}
class Manager extends Staff {
    constructor(name: string, salary: number, public department: string) {
        super(name, salary);
    }
    getDetails(): string {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}
const staff = new Staff("Somchai", 30000);
console.log(staff.getDetails());
const manager = new Manager("Somsak", 60000, "IT");
console.log(manager.getDetails());