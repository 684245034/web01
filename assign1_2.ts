const bookTitle: string = "TypeScript Beginner Guide";
const isbn: string = "9786169988776";
const price: number = 650;
const isAvailable: boolean = true;

const bookInfo: [string, number] = [bookTitle, price];

const discountPercent: number = 0.15;
const discountedPrice: number = price - (price * discountPercent);

const isPremium: boolean = price > 500;
const canDisplay: boolean = isPremium && isAvailable;

console.log(`===== Book Store Report =====`);
console.log(`Book Title: ${bookInfo[0]}`);
console.log(`ISBN: ${isbn}`);
console.log(`Original Price: ${bookInfo[1]} baht`);
console.log(`Discounted Price: ${discountedPrice} baht`);
console.log(`Premium Book: ${isPremium}`);
console.log(`Available: ${isAvailable}`);
console.log(`Can Display at Showcase: ${canDisplay}`);