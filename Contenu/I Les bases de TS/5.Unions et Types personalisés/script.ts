//Unions
let code: string | number | boolean | object | Function;
code = 6;

let arr : (boolean | number) []
arr = [true, false, 77];

const foo = (param : number|string) => {
    console.log(param);
}

foo('Test')

//Types Perso, Types Aliasis

type mixedNemStr = number|string;
type booleanObject = boolean|object;

const baz = (param : mixedNemStr|booleanObject) => {
    console.log(param);
}
baz(4);

type element = {
    x:number; //; c'est la documentationn de TypeScript
    y:number;
    id: number|string;
    visible: boolean
}

const button : element ={
    x:99,
    y:90,
    id:532,
    visible:true
}