abstract class shippingCalculatator{
    constructor(public name:string, public salary:number){}

    abstract method():number;
}

abstract class StandardShipping extends shippingCalculatator{
    calculateBonus():number{
        return this.salary*2;
    }
}

abstract class ExpressShipping extends shippingCalculatator{
    calculateBonus():number{
        return this.salary*0.5;
    }
}
const emp1 = StandardShipping("somchai", 3000);
const emp2 = ExpressShipping("somdsri", 15000);

console.log(emp1.getDetails());
console.log(emp2.getDetails());
