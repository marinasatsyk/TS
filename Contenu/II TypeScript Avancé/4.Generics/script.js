"use strict";
//Generics parametres reutisalbes
const Londres = {
    name: "Londres",
    pop: 10,
    additionalData: { area: "lkjlkjl" }
};
//objet[] tableau d'objets
const Paris = {
    name: "Londres",
    pop: 5,
    additionalData: [{ area: "lkjlkjl" }, { underground: true }]
};
//Generics with functions
/*Generic  accepte tout et ensuite il l'eregistre
pour la precision estends objet etc
*/
// const addRepairDate = (obj: object) => {
const addRepairDate = (obj) => {
    const lastRepair = new Date();
    return Object.assign(Object.assign({}, obj), { lastRepair });
};
const auto1 = addRepairDate({ model: "A1", km: 70000, price: 10000 });
// error! on ne peut pas acceder comme ça si il n'y a pas de generics
// console.log(auto1.model);
console.log(auto1.model);
const auto2 = addRepairDate({ model: "A1", km: 70000, price: 10000, color: "red" });
//   const auto3 = addRepairDate("test")
//  console.log(auto3);
