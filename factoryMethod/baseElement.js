export default class BaseVehicle {

    constructor(color, brand, tireNumber)
    {
        this.color = color;
        this.brand = brand;
        this.tireNumber = tireNumber;
    }

    drive() {
        console.log(`this vehicle has ${this.tireNumber} tires and it's brand is ${this.brand}`);

    }

    breaks() {

    }

}

