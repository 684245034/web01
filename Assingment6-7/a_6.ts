class Product {
  private _name: string;
  private _price: number;
  private _stock: number;

  constructor(name: string, price: number, stock: number) {
    this._name = name;
    this._price = price;
    this._stock = stock;
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set price(price: number) {
    if (price > 0) {
      this._price = price;
    } else {
      console.log("ราคาต้องมากกว่า 0");
    }
  }

  get price(): number {
    return this._price;
  }

  set stock(stock: number) {
    if (stock >= 0) {
      this._stock = stock;
    } else {
      console.log("จำนวนสินค้าไม่สามารถติดลบได้");
    }
  }

  get stock(): number {
    return this._stock;
  }

  get inventoryValue(): number {
    return this._price * this._stock;
  }
}

let p = new Product("Pen", 10, 20);

p.price = -5;

console.log("ชื่อสินค้า: " + p.name);
console.log("ราคา: " + p.price);
console.log("จำนวนสินค้า: " + p.stock);
console.log("มูลค่าสินค้าทั้งหมด: " + p.inventoryValue);
