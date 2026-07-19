function getLowInventory(
    amounts: number[],
    limit: number
): number[] {

    let result: number[] = [];

    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] < limit) {
            result.push(amounts[i]);
        }
    }

    return result;
}

let inventory = [20, 5, 12, 8, 30];

console.log(
    "Low stock:",
    getLowInventory(inventory, 10)
);


// Assignment 4.2 Part 2

class Item {
    readonly id: number;
    name: string;
    price: number;
    quantity: number;

    constructor(
        id: number,
        name: string,
        price: number,
        quantity: number
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    purchase(amount: number): void {
        if (amount > this.quantity) {
            console.log(
                "Error: Not enough stock for " + this.name
            );
        } else {
            this.quantity = this.quantity - amount;

            console.log(
                "Sold " + amount + " " + this.name
            );
        }
    }

    addStock(amount: number): void {
        this.quantity = this.quantity + amount;

        console.log(
            this.name + " stock: " + this.quantity
        );
    }
}


// Assignment 4.2 Part 3 and Part 4

class Player {
    name: string;
    hp: number;
    inventory: Item[];

    constructor(name: string, hp: number) {
        this.name = name;
        this.hp = hp;
        this.inventory = [];
    }

    collectItem(item: Item): void {
        this.inventory.push(item);

        console.log(
            item.name + " added to " + this.name + "'s inventory"
        );
    }

    consumeItem(itemName: string): void {
        for (let i = 0; i < this.inventory.length; i++) {

            if (this.inventory[i].name == itemName) {

                this.inventory[i].quantity =
                    this.inventory[i].quantity - 1;

                console.log(
                    this.name +
                    " used " +
                    itemName +
                    ". Remaining: " +
                    this.inventory[i].quantity
                );

                if (this.inventory[i].quantity == 0) {
                    this.inventory.splice(i, 1);
                }

                return;
            }
        }

        console.log(itemName + " not found");
    }

    receiveDamage(damage: number): void {
        this.hp = this.hp - damage;

        if (this.hp <= 0) {
            this.hp = 0;

            console.log(
                "Game Over: " + this.name + " has fallen!"
            );
        } else {
            console.log(
                this.name + " HP: " + this.hp
            );
        }
    }
}


// Test Item

let potion = new Item(1, "Potion", 50, 3);
let sword = new Item(2, "Sword", 200, 1);

potion.purchase(1);
potion.addStock(2);
potion.purchase(10);


// Test Player

let hero = new Player("John", 100);

hero.collectItem(potion);
hero.collectItem(sword);

hero.consumeItem("Potion");
hero.consumeItem("Sword");
hero.consumeItem("Sword");

hero.receiveDamage(30);
hero.receiveDamage(80);