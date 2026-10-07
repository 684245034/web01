export abstract class BaseDAO.ts{
    protected db: Database.Database;
    constructor(dbname: string = 'Inventory.db'){
        this.db = new Database(dbname);
        this.iniTable();
    }
    protected abstract iniTable():void;


this.db.exex(`
    CRATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    isbn TEXT NOT NULL UNIQUE,
    title TEXT NOT BULL'
    author TEXT NOT NULL,
    isAvilable INTEGER NOT NULL
    )
    
    `);

    public insert(isbn: string, title: string, author: string): booean{

        
    }


}