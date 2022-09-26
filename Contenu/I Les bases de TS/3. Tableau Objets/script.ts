// const fruits = ['fraise', 'posmme'];
// fruits.push("cerises");
// console.log(fruits);

// const mixedArray = [1, 'txt', [1, 2, 3]];

//typer une variable
// let nums : number [];
//  nums.push(1) erreur => la variable n'était pas assignée
// nums = [1, 2, 3];

// let nums2 : number [] = [];


// let random : any [];
// random = [1, "2", false];


//Objets
const car = {
    name :"Audi",
    km: 70000,
    model: "A1"
}

// car.name = 1 erreur


let profile : {
    name : string,
    age :number,
    hobbies : string [] //on type le contenu du tableau
}

profile = {
    name : "John", 
    age: 40,
    hobbies : []
}

let user2 :{
    name: string,
    age : number,
    favFood: string [],
    data: any
} = {
    name: "Joe",
    age : 45,
    favFood: ["pasta"],
    data: 50

}

let obj : object;
obj = {name: "Enzo"}

