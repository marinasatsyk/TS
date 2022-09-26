"use strict";
//L'operateur!
//pour ne pas avoir une erreur null => ! ou ?  ! indique que la variable ne va jamais retourne null
const container = document.querySelector('.container');
const user1 = {
    salary: 120,
    title: "Dev Front-End",
    // description: 'developpeur de site internet'
};
console.log(user1 === null || user1 === void 0 ? void 0 : user1.description);
//Optional Parameter si il y a le msg on le montre, sinon une autre option
function message(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log('no message provided');
    }
}
message('coucou');
const house1 = {
    room: 4,
    price: 100
};
// ?? opérateur  engloge 2 condition: n'est pas null || undefined 
const data = 0;
const display = data !== null && data !== void 0 ? data : 'Hello World';
console.log(display);
//Never il n'y a pas de return
function alertUser(msg) {
    throw msg;
}
alertUser("Alerte, comportement dangereux");
