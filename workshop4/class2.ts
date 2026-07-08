class car {
    brand: string;
    type: string;
    type2: string;
    door: number;
    engine: string;

    constructor(b: string, t: string, t2: string, d: number, e: string) {
        this.brand = b;
        this.type = t;
        this.type2 = t2;
        this.door = d;
        this.engine = e;
    }

    show(): void {
        console.log(`ยี่ห้อ: ${this.brand}, รุ่น: ${this.type}, ประเภท: ${this.type2}, จำนวนประตู: ${this.door}, เครื่องยนต์: ${this.engine}`);
    }
    chgEngine(newEngine: string): void {
        this.engine = newEngine;
        console.log(`${this.brand} ${this.type} Change Engine to: ${newEngine}`);
    }
}

const car1 = new car("Toyota", "Camry", "Sedan", 4, "2000");
car1.show();

const car2 = new car("Isuzu", "Mux", "Truck", 5, "2500");
car2.show();
car1.chgEngine("2500 Hybrid");
car1.show();