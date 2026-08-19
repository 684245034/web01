export {};

class Character {
    constructor(public name: string, public health: number, public level: number) {}

    takeDamage(amount: number): void {
        this.health -= amount;
    }

    attack(): void {
        console.log(`${this.name} attacks`);
    }
}

class Mage extends Character {
    constructor(name: string, health: number, level: number, public mana: number) {
        super(name, health, level);
    }

    attack(): void {
        console.log(`${this.name} uses Spell`);
    }
}

class Warrior extends Character {
    constructor(name: string, health: number, level: number, public stamina: number) {
        super(name, health, level);
    }

    attack(): void {
        console.log(`${this.name} uses Sword`);
    }
}

const mage1 = new Mage("Gandalf", 100, 10, 50);
console.log(mage1.name);
console.log(mage1.mana);
mage1.attack();
mage1.takeDamage(20);
console.log(mage1.health);

const warrior1 = new Warrior("Arthur", 150, 12, 100);
console.log(warrior1.name);
console.log(warrior1.stamina);
warrior1.attack();
warrior1.takeDamage(30);
console.log(warrior1.health);