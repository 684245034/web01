const productName: string = "Wireless Mouse";
const pricePerUnit: number = 450;
const quantity: number = 3;
const isMember: boolean = false;

const totalPrice: number = pricePerUnit * quantity;
const hasDiscount: boolean = totalPrice > 1000 || isMember === true;

const discountRate: number = hasDiscount ? 0.10 : 0;
const discountAmount: number = totalPrice * discountRate;
const finalPrice: number = totalPrice - discountAmount;

console.log(`===== Shopping Summary =====`);
console.log(`Product: ${productName}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total Price: ${totalPrice} baht`);
console.log(`Discount: ${hasDiscount}`);
console.log(`Final Price: ${finalPrice} baht`);