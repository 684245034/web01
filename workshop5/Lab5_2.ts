class Book {
  public readonly isbn: string;
  public title: string;
  private isBorrowed: boolean;

  constructor(isbn: string, title: string) {
    this.isbn = isbn;
    this.title = title;
    this.isBorrowed = false;
  }

  public borrowBook(): void {
    if (this.isBorrowed) {
      console.log("Book is already borrowed.");
    } else {
      this.isBorrowed = true;
      console.log("Successfully borrowed.");
    }
  }

  public returnBook(): void {
    if (!this.isBorrowed) {
      console.log("Book is not currently borrowed.");
    } else {
      this.isBorrowed = false;
      console.log("Successfully returned.");
    }
  }
}

const myBook = new Book("87648987", "Clean Code");

myBook.borrowBook();
myBook.borrowBook();
myBook.returnBook();
myBook.returnBook();