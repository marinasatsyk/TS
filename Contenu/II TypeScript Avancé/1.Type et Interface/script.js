"use strict";
//Intersection
const shark1 = {
    fin: 1,
    element: "water",
    gills: true,
    weight: 200,
    length: 1,
    test: "abc"
};
let obj;
const RedRose = {
    pollen: true,
    type: 'vegetal',
    color: 'red',
    trohn: true,
};
const automaticResponse = (country) => {
    if (country.lang === 'JA') {
        console.log('hello Japan');
    }
    else if (country.lang === 'IT') {
        console.log('hello Italy');
    }
};
const Japanese1 = {
    lang: 'JA',
    food: ['Ramen', 'Sushis']
};
automaticResponse(Japanese1);
const spainTrip = {
    john: { id: 1 },
    nathalie: { id: 2, age: 23 }
};
