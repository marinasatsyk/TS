"use strict";
class RocketFactory {
    constructor(r, vMax, price, carburant) {
        this.reactors = r;
        this.price = price;
        this.carburant = carburant;
        this.vMax = vMax;
    }
    takeOff(actions) {
        console.log(actions);
    }
}
const Falcon1 = new RocketFactory(12, 900, 2, '9000');
Falcon1.takeOff('Décollage');
