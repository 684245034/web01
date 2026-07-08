class house{
    constructor(public room:number,public bathroom:number,public area:number,public price:number)}
    {

        show():void{
            console.log(`house - ${this.room} bedrooms, ${this.btoathroom} bathrooms, ${this.area} square meters, priced at ${this.price}`);
    }
    show():void{
        console.log(`house - ${this.room} bedrooms, ${this.bathroom} bathrooms, ${this.area} square meters, priced at ${this.price}`);
    }
}
const house1 = new house(3,2,120,5000000);
house1.show();
const house2 = new house(4,3,200,8000000);
house2.show();
        

