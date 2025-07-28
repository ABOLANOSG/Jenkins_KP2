export default class Transport {
    constructor(motor, seats, name) {
        this.motor = motor;
        this.seats = seats;
        this.name = name;
    }

    deliverPackage() {
        return `the transport is delivering by ${this.name}`;
    }
}