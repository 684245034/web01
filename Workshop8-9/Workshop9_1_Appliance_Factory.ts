abstract class Appliance {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }
    abstract turnOn(): void;
}

class WashingMachine extends Appliance {
    turnOn(): void {
        console.log(`[${this.brand}] เครื่องซักผ้าเริ่มทำงาน: กำลังปั่นผ้า...`);
    }
}

class Refrigerator extends Appliance {
    turnOn(): void {
        console.log(`[${this.brand}] ตู้เย็นเริ่มทำงาน: กำลังทำความเย็น...`);
    }
}
const washer = new WashingMachine("LG");
washer.turnOn(); 
const fridge = new Refrigerator("Samsung");
fridge.turnOn(); 