import BaseVehicle from "./baseElement.js";

export default class Motorcicle extends BaseVehicle {

    constructor(color, brand, tireNumber, chainLength, cilinders) {
        super(color, brand, tireNumber);
        this.cilinders = cilinders;
        this.chainLength = chainLength;
    }

    
}