class Product {
    private _name: string;
    private _price: number;
    private _stock: number;

    constructor(name: string, price: number, stock: number) {
        this._name = name;
        this._price = price;
        this._stock = stock;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            console.log("Warning: Price must be greater than 0");
        }
    }

    get stock(): number {
        return this._stock;
    }

    set stock(value: number) {
        if (value >= 0) {
            this._stock = value;
        } else {
            console.log("Warning: Stock cannot be negative");
        }
    }

    get inventoryValue(): number {
        return this._price * this._stock;
    }
}

console.log("=== Test Assignment 6 ===");
let item = new Product("Mechanical Keyboard", 850, 10);
console.log("Initial Inventory Value: " + item.inventoryValue);

item.price = -100; 
item.stock = -5;

item.price = 900;
item.stock = 5;
console.log("Updated Inventory Value: " + item.inventoryValue);
