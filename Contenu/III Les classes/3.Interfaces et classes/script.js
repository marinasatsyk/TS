"use strict";
class Norway {
    constructor(name, population, lang, capytal) {
        this.name = name;
        this.population = population;
        this.lang = lang;
        this.capytal = capytal;
    }
}
const NorwayData = new Norway("Norway", 9, ["novwegian"], 'Oslo');
console.log(NorwayData);
class France {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
const FranceData = new France("France", 70, ["français", 'breton', 'basque']);
console.log(FranceData);
class Aquitaine extends France {
}
const AquitaineData = new Aquitaine("Aquitaine", 4, ["basque"]);
