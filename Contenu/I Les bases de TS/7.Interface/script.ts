interface Rocket {
    reactors: number;
    vMax: number;
    takeOff: (actions: string) => void;
}
//on peux faire merging, les types ne peuvent pas le faire
interface Rocket {
    price: number;
    carburant: string;
}

class RocketFactory implements Rocket {
    reactors: number;
    vMax: number;
    price: number;
    carburant: string;
    constructor(r: number, vMax: number, price: number, carburant: string) {
        this.reactors = r;
        this.price = price;
        this.carburant = carburant;
        this.vMax = vMax;
    }
    takeOff(actions: string) {
        console.log(actions);
    }
}

const Falcon1 = new RocketFactory(12, 900, 2, '9000');
Falcon1.takeOff('Décollage');
