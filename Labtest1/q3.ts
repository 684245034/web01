let weight: number[] = [15, 5.5, 4.2, 8.9, 23, 16, 12.5, 2.7, 27.5, 30];

let overweightCount: number = 0;
let sum: number = 0;

for (let i = 0; i < weight.length; i++) {
    sum += weight[i];

    if (weight[i] >= 20) {
        overweightCount++;
    }
}

let average: number = sum / weight.length;

console.log("จำนวนพัสดุน้ำหนักเกิน (ตั้งแต่ 20 กก. ขึ้นไป) =", overweightCount, "ชิ้น");
console.log("น้ำหนักเฉลี่ยของพัสดุทั้งหมด =", average.toFixed(2), "กก.");