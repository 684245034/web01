class PrepaidSim{
    private_phonenumber: string;
    private_credit: number;
    
    constructor(phonenumber: string, credit: number){
    this._phonenumber = phonenumber
    this.credit = credit
    }

    get phonenumber(): number{
        return this.phonenumber;
    }

    set credit(value: number){
        if(value > 0){
            this.credit = value;
        }else{
            console.log(" ยอดเงินคงเหลือไม่สามารถเป็นค่าลบ ");
        }
    }
    

}
