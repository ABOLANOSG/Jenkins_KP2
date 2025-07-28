import Transport from "./Transport.js";

export default class Plane extends Transport{
    constructor(motor, seats, name, maxAltitude, wings, helix) {
        super(motor, seats, name);
        this.maxAltitude = maxAltitude;
        this.wings = wings;
        this.helix = helix;
    }

    fly() {
        return "The plane is flying";
    }
}