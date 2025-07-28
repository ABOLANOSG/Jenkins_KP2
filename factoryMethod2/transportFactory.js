import Train from "./Train.js";
import Plane from "./Plane.js";

export default class TransportFactory {
    static createTransport(type) {
        if(type === "train") {
            return new Train("train motor", 100, type, 7, 10);
        } else if (type ==="plane") {
            return new Plane("plane motor", 200, type, "3000km", 4, 8);
        } else {
            console.log("Error. This transport type is not defined on the fabric");
        }
    }
}