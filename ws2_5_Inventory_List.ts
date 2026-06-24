type Product = [string, number, number];

let inventory: Product[] = [
    ["Laptop", 25000, 10],
    ["Mouse", 500, 50],
    ["Keyboard", 1200, 30]
];

console.log("--- Inventory List ---");

for (let item of inventory) {
    let name = item[0];
    let price = item[1];
    let qty = item[2];
    
    console.log(`Product: ${name} | Price: ${price} THB | Quantity: ${qty} units`);
}