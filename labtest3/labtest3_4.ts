class user{
    constructor(
        private id: number,
        private name: string,
        private price: number,
        private stock: number
        private isAvailable: boolean,
    ){}


pubic getid(): number{
    return this.id;
}
pubic getname(): string{
    return this.name;
}
pubic getprice(): number{
    return this.price;
}
pubic getstock(): number{
    return this.id;
}
pubic getisAvailable(): boolean{
    return this.isAvailable;
}
pubic setid(id: number): void{
    return this.id = id;
}
pubic setname(name: string): void{
    return this.name = name;
}
pubic setprice(price: number): void{
    return this.price = price;
}
pubic setstock(stock: number): void{
    return this.stock = stock;
}
pubic setisAvailable(isAvailable: boolean): void{
    return this.isAvailable = isAvailable;
}

public getInfo(): string{
    let status = "Borrowed";
    if(this.isAvailable){
        status = "Avaislable";

    }

    return `[LISBN-\({this.name})]\{this.price}by \({this.stock} Status:\){Status})`
}

}