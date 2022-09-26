interface Country {
    name: string;
    population: number;
    lang: string[];
}

class Norway implements Country {
    constructor(
        public name: string,
        public population: number,
        public lang: string[],
        public capytal: string
    ) { }
}

const NorwayData = new Norway("Norway", 9, ["novwegian"], 'Oslo')
console.log(NorwayData);

class France implements Country {
    constructor(
        public name: string,
        public population: number,
        public lang: string[]
    ) { }
}

const FranceData = new France("France", 70, ["français", 'breton', 'basque'])
console.log(FranceData);

class Aquitaine extends France { }
const AquitaineData = new Aquitaine("Aquitaine", 4, ["basque"])
