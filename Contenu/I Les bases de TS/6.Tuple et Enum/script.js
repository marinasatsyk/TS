"use strict";
//Tuple
//un tableau avec un type défini. C'est tres strict, mais on peux faire le PUSH
let tuple;
tuple = [false, 20];
//Enum
// const Roles = {
//     JAVASCRIPT : 1,
//     CSS :2,
//     REACT :3
// }
// console.log(Roles.JAVASCRIPT);
var Roles;
(function (Roles) {
    Roles[Roles["JAVASCRIPT"] = 1] = "JAVASCRIPT";
    Roles[Roles["CSS"] = 2] = "CSS";
    Roles[Roles["REACT"] = 3] = "REACT";
})(Roles || (Roles = {}));
console.log(Roles);
