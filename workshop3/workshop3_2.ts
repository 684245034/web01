function calculatePrice(price:number,discountPercent:number): number{
    const discountAmount = price * (discountPercent / 100);
    const netPrice = price - discountAmount;
    if (netPrice < 0) {
        return 0;
}
return netPrice;
}
let p:number=50;
let q:number=120;
let afterDisc = calculatePrice(p,q);
console.log(`Price: ${p} บาท
Discount: ${q} %
Price after Discount: ${afterDisc} บาท`
)