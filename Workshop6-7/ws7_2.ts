export {};

class Shape {
    constructor(public color: string) {}
}

class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color);
    }

    calculateArea(): number {
        return 3.14 * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(color: string, public side: number) {
        super(color);
    }

    calculateArea(): number {
        return this.side * this.side;
    }
}

const circle1 = new Circle("Red", 5);
console.log(circle1.color);
console.log(circle1.calculateArea());

const square1 = new Square("Blue", 4);
console.log(square1.color);
console.log(square1.calculateArea());