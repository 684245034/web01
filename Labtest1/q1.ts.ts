let cupsize: string = "S";
let price: number = 0;

if (cupsize === "S") {
    price = 60;
} else if (cupsize === "M") {
    price = 80;
} else if (cupsize === "L") {
    price = 100;
} else {
    console.log("ไม่มีขนาดนี้");
}

console.log(price);

let cupSizes: string[] = ["S", "M", "L"];
let prices: number[] = [60, 80, 100];

console.log(cupSizes[0], prices[0]);
console.log(cupSizes[1], prices[1]);
console.log(cupSizes[2], prices[2]);