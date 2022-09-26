//Intersection

type Fish ={
    fin: number;
    element : "water";
    gills: true
}

type Shark ={
    weight :number;
    length : number
}

type HammerheadShark = Fish & Shark & {
    test : "abc"
}


const shark1: HammerheadShark = {
    fin: 1, 
    element :"water", 
    gills: true,
    weight :200, 
    length : 1,
    test :"abc"
}

let obj : {
    prop1 : "a"
} & {
    prop2: "b"
}


// Lier des interfaces
//les interfaces sont  utilisés  avec les classes ; les types 
interface Flower {
    pollen : true;
    type: "vegetal"
}

interface Rose extends Flower {
    color: string;
    trohn: boolean
}

const RedRose : Rose = {
    pollen : true,
    type: 'vegetal', 
    color : 'red',
    trohn: true,
   
}

//Union discriminante

type Japan ={
    lang : 'JA'; 
    food : string[];

}

type Italy ={
    lang : 'IT', 
    food : string[]
}

//type Jap OU Italy, on les gérer par une contidion
type Country = Japan | Italy

const automaticResponse = (country :Country) => {
    if(country.lang === 'JA'){
        console.log('hello Japan');
        
    }else if (country.lang === 'IT'){
        console.log('hello Italy');
        
    }
}

const Japanese1 : Country ={
    lang : 'JA',
    food : ['Ramen', 'Sushis']
}

automaticResponse(Japanese1);

//Unknown number of props

interface Group{
    [name:string] : object
}

const spainTrip : Group = {
    john : {id:1},
    nathalie :{id:2, age :23}
}