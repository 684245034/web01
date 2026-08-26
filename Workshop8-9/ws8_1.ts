class PaymentGateway {
    process(amount: number): void {
        console.log(`Processing generic payment of $${amount}`);
    }
}

class CreditCardPayment extends PaymentGateway {

    override process(amount: number): void {
        console.log(`Processing CC... amount: $${amount}`);
    }
}

class PayPalPayment extends PaymentGateway {

    override process(amount: number): void {
        console.log(`Redirecting to PayPal... amount: $${amount}`);
    }
}

function executePayment(p: PaymentGateway, amt: number): void {
    p.process(amt);
}

const myCC = new CreditCardPayment();
const myPayPal = new PayPalPayment();

executePayment(myCC, 1500); 

executePayment(myPayPal, 800);