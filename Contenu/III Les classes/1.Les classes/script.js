"use strict";
class Book {
    constructor(t, p, dop, a, th) {
        this.title = t;
        this.price = p;
        this.dateOfParution = dop;
        this.author = a;
        this.theme = th;
    }
    promo() {
        return this.price * 0.5;
    }
}
const Book1 = new Book("The Great Gatsby", 20, "11/04/2000", "Djohn Doo");
// console.log(Book1);
// console.log(Book1.promo());
//on peut utiliser les classes en tant que TYPE 
const addToShelter = (obj) => {
    console.log('ADDED TO SHELTER', obj);
};
addToShelter(new Book("NANA", 15, "12/07/2005", "Zola", ["roman", 'roman historyque']));
//cette variable peut etre seulement le tableau 
//avec les caracterestiques provenant de la class Book
let onlyBook = [];
onlyBook.push(new Book("AZERTY", 15, "12/07/2005", "Zola", ["roman", 'roman historyque']));
console.log(onlyBook[0].title);
