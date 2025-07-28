import Car from "../../factoryMethod/Car.js";
import BaseVehicle from "../../factoryMethod/baseElement.js";
import Motorcicle from "../../factoryMethod/Motorcicle.js";
//import Bike from "../../factoryMethod/Bike";
import { assert } from "chai";

describe("testing object inhritance", function () {
    it("test the inheritance of vehicle objects", async function () {

        const myCar = new Car("red", "toyota", 4, 5, 3);
        assert.isTrue(myCar instanceof Car, "Error my car is not an instance of Car");

        assert.isTrue(myCar instanceof BaseVehicle, "Error my car is not an instance of BaseVehicle");

        assert.isFalse(myCar instanceof Motorcicle, "Error my car is an instance of Motorcicle");
    });
});
