let books: string[] = ["Python Programming", "React Basics", "Database Design"];
let searchBook: string = "React Basics";
let found: boolean = false;

for (let i = 0; i < books.length; i++) {
    if (books[i] === searchBook) {
        found = true;
    }
}

console.log("Available Books");
for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
}

if (found) {
    console.log("Found: " + searchBook);
} else {
    console.log("Book not found");
}