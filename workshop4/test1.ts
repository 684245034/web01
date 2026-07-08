class triangle {
    base: number;
    height: number;
    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }
    area(): number {
        return (this.base * this.height) / 2;
    }
}
const triangle1 = new triangle(10, 5);
console.log("Area of triangle1:", triangle1.area());
