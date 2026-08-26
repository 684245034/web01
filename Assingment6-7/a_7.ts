class Book {
  title: string;
  author: string;
  price: number;
  stock: number;

  constructor(title: string, author: string, price: number, stock: number) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.stock = stock;
  }

  sellBook(quantity: number): void {
    if (quantity <= this.stock) {
      this.stock = this.stock - quantity;
      let total = this.price * quantity;
      console.log("ขายหนังสือ " + this.title + " จำนวน " + quantity + " เล่ม");
      console.log("ยอดเงินทั้งหมด " + total + " บาท");
      console.log("หนังสือคงเหลือ " + this.stock + " เล่ม");
    } else {
      console.log("หนังสือในคลังไม่พอ");
    }
  }
}

class EBook extends Book {
  fileSize: number;
  downloadLink: string;

  constructor(title: string, author: string, price: number, stock: number, fileSize: number, downloadLink: string) {
    super(title, author, price, stock);
    this.fileSize = fileSize;
    this.downloadLink = downloadLink;
  }

  sellBook(quantity: number): void {
    let total = this.price * quantity;
    console.log("ขาย E-Book " + this.title + " จำนวน " + quantity + " เล่ม");
    console.log("ยอดเงินทั้งหมด " + total + " บาท");
    console.log("ลิงก์ดาวน์โหลด " + this.downloadLink);
  }
}

class PrintedBook extends Book {
  weight: number;
  shippingCost: number;

  constructor(title: string, author: string, price: number, stock: number, weight: number, shippingCost: number) {
    super(title, author, price, stock);
    this.weight = weight;
    this.shippingCost = shippingCost;
  }

  sellBook(quantity: number): void {
    if (quantity <= this.stock) {
      this.stock = this.stock - quantity;
      let total = (this.price * quantity) + this.shippingCost;
      console.log("ขายหนังสือ " + this.title + " จำนวน " + quantity + " เล่ม");
      console.log("ค่าจัดส่ง " + this.shippingCost + " บาท");
      console.log("ยอดเงินทั้งหมด " + total + " บาท");
      console.log("หนังสือคงเหลือ " + this.stock + " เล่ม");
    } else {
      console.log("หนังสือในคลังไม่พอ");
    }
  }
}

let e = new EBook("Book A", "A", 100, 0, 5, "www.book.com");
let b = new PrintedBook("Book B", "B", 200, 10, 1, 30);

e.sellBook(2);
b.sellBook(3);
