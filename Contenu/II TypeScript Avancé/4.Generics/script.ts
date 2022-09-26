//Generics parametres reutisalbes

//Interfaces Reutilisables je ne veux pas preciser le type. 
// il sera assigne lors de la déclaration d'une variable

interface City<T> {
    name : string,
    pop : number,
    additionalData : T
}

const Londres : City<object> = {
    name : "Londres",
    pop : 10,
    additionalData : {area :"lkjlkjl"}
}
//objet[] tableau d'objets
const Paris : City<object[]> = {
    name : "Londres",
    pop : 5,
    additionalData : [{area :"lkjlkjl"}, {underground : true}]
}

//Generics with functions
/*Generic  accepte tout et ensuite il l'eregistre
pour la precision estends objet etc
*/
// const addRepairDate = (obj: object) => {
const addRepairDate = <T extends object> (obj: T) => {
    const lastRepair = new Date()
    return {...obj, lastRepair}
}

const auto1 = addRepairDate({model: "A1", km: 70000,  price: 10000})
// error! on ne peut pas acceder comme ça si il n'y a pas de generics
// console.log(auto1.model);
 console.log(auto1.model);

 const auto2 = addRepairDate({model: "A1", km: 70000,  price: 10000, color: "red"})
//   const auto3 = addRepairDate("test")
//  console.log(auto3);


