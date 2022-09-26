type NumberOrString = number | string;

// pour être presis par raport ce que une fonction retourne

function combine(a: number, b:number) : number 
function combine(a: number, b:string) : string 
function combine(a: string, b:number) : string 
function combine(a: string, b:string) : string 
function combine(a: NumberOrString, b:NumberOrString) : number | string{
   if(typeof a === "string" || typeof b === "string"){
       return a.toString()+b.toString()
   }else{
       return a + b
   }
}

console.log(combine("test1", "test2"));
console.log(combine(2, "test2"));
console.log(combine("test1", 5));
console.log(combine(5, 5));