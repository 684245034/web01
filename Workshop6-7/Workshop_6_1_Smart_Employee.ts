class Employee {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName(): string {
        return this._firstName + " " + this._lastName;
    }

    set fullName(name: string) {
        let parts: string[] = name.split(" ");

        if (parts.length > 1) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        } else {
            this._firstName = name;
            this._lastName = "";
        }
    }
}

console.log("=== Test Workshop 6.1 ===");
let emp = new Employee("Chakrit", "Student");
console.log("Initial Full Name: " + emp.fullName);

emp.fullName = "Guide Doe";
console.log("Updated Full Name: " + emp.fullName);
console.log("");