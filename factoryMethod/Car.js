import BaseVehicle from "./baseElement.js";

export default class Car extends BaseVehicle {

    constructor(color, brand, tireNumber, doors, cilinders) {
        super(color, brand, tireNumber);
        this.doors = doors;
        this.cilinders = cilinders;
    }


}