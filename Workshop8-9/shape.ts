class Shape {
    draw(): void {}
    area(): void {}
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    draw(): void {
        console.log("วาดรูปวงกลม");
    }

    area(): void {
        const area = Math.PI * Math.pow(this.radius, 2);
        console.log(`พื้นที่วงกลม (รัศมี ${this.radius}): ${area.toFixed(2)}`);
    }
}

class Square extends Shape {
    constructor(public side: number) {
        super();
    }

    draw(): void {
        console.log("วาดรูปสี่เหลี่ยม");
    }

    area(): void {
        const area = this.side * this.side;
        console.log(`พื้นที่สี่เหลี่ยม (ด้าน ${this.side}): ${area}`);
    }
}

class Triangle extends Shape {
    constructor(public base: number, public height: number) {
        super();
    }

    draw(): void {
        console.log("วาดรูปสามเหลี่ยม");
    }

    area(): void {
        const area = 0.5 * this.base * this.height;
        console.log(`พื้นที่สามเหลี่ยม (ฐาน ${this.base}, สูง ${this.height}): ${area}`);
    }
}

const shape: Shape[] = [new Shape(), new Circle(7), new Square(8), new Triangle(8, 5)];

shape.forEach(shape => {  
    shape.draw();
    shape.area();
});