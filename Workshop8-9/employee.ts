abstract class Employee{
    constructor(public name: string, public experience: number){}
    abstract getBaseSalary():number;
    showProfile(){
        console.log(`Name: ${this.name}, Experience: ${this.experience} years`);
    }
}
class Programmer extends Employee{
    getBaseSalary(): number {
        return 25000;
    }
}
class Manager extends Employee{
    getBaseSalary(): number {
        return 50000;
    }
}
const employees: Employee[] = [new Programmer("Alicemarkus", 2), new Manager("Bobleeswager", 5), new Programmer("Charliekenton", 3)];
employees.forEach(employee => {
    employee.showProfile();
    console.log(`ตำแหน่งงาน ${employee.constructor.name}, เงินเดือนเริ่มต้น: ${employee.getBaseSalary()}`);
    const plus = employee.getBaseSalary() * 0.1 * employee.experience;
    console.log(`ได้ค่าประสบการณ์: ${plus}บาท รวม${plus + employee.getBaseSalary()}`);
});