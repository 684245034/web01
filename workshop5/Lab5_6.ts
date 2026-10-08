class Wallet {
  private _balance: number = 0;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  get formattedBalance(): string {
    return `$${this._balance}`;
  }

  set balance(amount: number) {
    if (amount < 0) {
      console.error("จำนวนเงินต้องไม่ติดลบ");
      return;
    }
    this._balance = amount;
  }

  get balanceInTHB(): number {
    return this._balance * 33.5;
  }
}

const myWallet = new Wallet(100);

console.log(myWallet.formattedBalance);
console.log(myWallet.balanceInTHB);

myWallet.balance = 150;
console.log(myWallet.formattedBalance);
console.log(myWallet.balanceInTHB);

myWallet.balance = -50;
console.log(myWallet.formattedBalance);