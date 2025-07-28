import Transport from "./Transport.js";

export default class Train extends Transport {
    constructor(motor, seats, name, carriageCount, stations) {
        super(motor, seats, name);
        this.carriageCount = carriageCount;
        this.stations = stations;
    }

    move() {
        return "Train is moving and leaving the station";
    }
}