import BaseVehicle from "./baseElement.js";

export default class Bike extends BaseVehicle {

    constructor(color, brand, tireNumber, chainLength, frame) {
        super(color, brand, tireNumber);
        this.chainLength = chainLength;
        this.frame = frame;
    }

    
}