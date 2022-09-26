
 //L'operateur!
//pour ne pas avoir une erreur null => ! ou ?  ! indique que la variable ne va jamais retourne null

const container = document.querySelector('.container')!;
// optional chaining
// console.log(container?.children); 

//L'operateur ?
// proprietés facultatifs 

type Job = {
    title : string;
    description?: string;
    salary: number
}

const user1 : Job = {
    salary: 120,
    title : "Dev Front-End",
    // description: 'developpeur de site internet'
}

console.log(user1?.description);

//Optional Parameter si il y a le msg on le montre, sinon une autre option

function message(msg?: string) {
    if(msg) {
        console.log(msg);
        
    }else {
        console.log('no message provided');
        
    }
}

message('coucou')

//Optional interface property
interface House {
    room : number;
    price : number;
    garage?: number
}

const house1 :House = {
    room :4,
    price : 100
}

// ?? opérateur  engloge 2 condition: n'est pas null || undefined 

const data = 0;
const display = data ?? 'Hello World'

console.log(display);


//Never il n'y a pas de return

function alertUser(msg : string) : never {
    throw msg;
}

alertUser("Alerte, comportement dangereux")

