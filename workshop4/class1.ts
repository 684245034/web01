class laptop{
    brand: string;
    price: number;

    constructor(brand: string, price: number) {
        this.brand = brand;
        this.price = price;
    }

    show(): void {
        console.log(`lattop brand is ${this.brand} and price is ${this.price}`);
    }
}
const laptop1 = new laptop("Dell", 25000);
laptop1.show();