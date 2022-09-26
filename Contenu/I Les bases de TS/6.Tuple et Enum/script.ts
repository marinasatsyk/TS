//Tuple

//un tableau avec un type défini. C'est tres strict, !!!mais on peux faire le PUSH!!!

let tuple :[boolean, number];
tuple = [false, 20]


//Enum
//le objet avec les positions prédéfinis MAIS on peux y acceder de deux maniere
// Roles.JAVASCRIPt = Roles.1
// const Roles = {
//     JAVASCRIPT : 1,
//     CSS :2,
//     REACT :3
// }

// console.log(Roles.JAVASCRIPT);

enum  Roles {JAVASCRIPT=1, CSS, REACT}

console.log(Roles);
