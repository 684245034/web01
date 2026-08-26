export{};
interface StorageService {
    save(data: string): void;
    load(): string;
}
abstract class Storage {
    protected data: string = "";
}
class CloudStorage extends Storage implements StorageService {
    save(data: string): void {
        this.data = data;
        console.log(`บันทึกข้อมูลลง Cloud: ${this.data}`);
    }
    load(): string {
        return this.data;
    }
}
class LocalStorage extends Storage implements StorageService {
    save(data: string): void {
        this.data = data;
        console.log(`บันทึกข้อมูลลงเครื่อง: ${this.data}`);
    }
    load(): string {
        return this.data;
    }
}
const Storage1 = new CloudStorage();
const Storage2 = new LocalStorage();
Storage1.save("Hello Cloud");
console.log("ข้อมูลที่โหลดได้:", Storage1.load());
console.log("----------------------");
Storage2.save("Hello Local");
console.log("ข้อมูลที่โหลดได้:", Storage2.load());   

