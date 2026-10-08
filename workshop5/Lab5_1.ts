class UserAccount {
    public username: string;
    private password: string;
    constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
}
    changePassword(oldPass: string, newPass: string): void {
    if (this.password === oldPass) {
    this.password = newPass;
    console.log("เปลี่ยนรหัสผ่านเรียบร้อยแล้ว");
    }else{
        console.error("คุณใส่รหัสผ่านไม่ถูกต้อง ไม่สามารถเปลี่ยนรหัสผ่านได้")
    }}}
    
    
const user1 = new UserAccount("santa", "123456");
console.log("ชื่อผู้ใช้:", user1.username);
user1.changePassword("5443", "99999");
user1.changePassword("123456", "123456");