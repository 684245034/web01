class Product {
  private _price: number = 0;

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      console.log("ไม่สามารถกำหนดราคาติดลบได้");
    }
  }
}

const laptop = new Product();

laptop.price = 25000;
console.log(laptop.price);

laptop.price = -5500;
console.log(laptop.price);