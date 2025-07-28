import TransportFactory from "../../factoryMethod2/transportFactory.js";
import Train from "../../factoryMethod2/Train.js";
import Plane from "../../factoryMethod2/Plane.js";
import Transport from "../../factoryMethod2/Transport.js";
import { assert } from "chai";

describe("Testing transport elements from factory", function () {
    it("Test if the transport factory works correctly", async function () {

        const trainTransport = TransportFactory.createTransport("train");
        const planeTransport = TransportFactory.createTransport("plane");

        console.log(trainTransport.deliverPackage());
        console.log(planeTransport.deliverPackage());
        assert.isTrue(trainTransport.deliverPackage() === "the transport is delivering by train");
        assert.isTrue(planeTransport.deliverPackage() === "the transport is delivering by plane");

    });

    it("Tests if the instance is type of transport", async function () {
        const train = TransportFactory.createTransport("train");

        assert.isTrue(train instanceof Transport, "Error, train is not instance of Transport");
        assert.isTrue(train instanceof Train, "Error, train is not an instance of Train");
        assert.isFalse(train instanceof Plane, "Error, train is an instance of Plane");
    });
})