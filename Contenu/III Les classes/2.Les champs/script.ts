class Book {
    //Syntaxe sans raccourci
    // title: string;
    // price: number;
    // dateOfParution : string;
    // author: string;
    // theme?: string[];
    // private bookID = 88;
    // readonly libraryName = "The Book Shelf"

    // constructor(t: string, p: number, dop:string, a:string, th?:string[]){
    //     this.title =t;
    //     this.price = p;
    //     this.dateOfParution = dop;
    //     this.author = a;
    //     this.theme =  th;
    // }
    //RACCOURCI
    private bookID = 88;
    readonly libraryName = "The Book Shelf"
    constructor(
        public title: string,
        public price: number,
        public dateOfParution : string,
        public author: string,
        public theme?: string[],
    ){}

    promo(){
        console.log('ID', this.bookID);
        console.log(this.libraryName);
    //    this.libraryName = "other" impossible assigner une autre valeure pour readonly
        return this.price * 0.5;
    }
}

const Book1 = new Book("The Great Gatsby", 20, "11/04/2000", "Djohn Doo")

//   console.log(Book1.bookID);
 console.log(Book1.promo());
 console.log(Book1);

//on peut utiliser les classes en tant que TYPE 
const addToShelter = (obj : Book) => {
    console.log('ADDED TO SHELTER',  obj);
    
}

addToShelter(new Book("NANA", 15, "12/07/2005", "Zola", ["roman", 'roman historyque']))

//cette variable peut etre seulement le tableau 
//avec les caracterestiques provenant de la class Book
let onlyBook : Book[] = [];
onlyBook.push(new Book("AZERTY", 15, "12/07/2005", "Zola", ["roman", 'roman historyque']))
console.log(onlyBook[0].title);


