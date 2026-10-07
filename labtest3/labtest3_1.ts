interface PaymentMethod{
    print():void;

}

interface Exportable{
    exportData():string;
}

class PaymentMethod implements Exportable{
    constructor(public title:string, public content: string){}

    print():void
    console.log(`print document`)
}

