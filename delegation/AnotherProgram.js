import Program from "./Program.js";

export default class AnotherProgram {
    constructor() {

    }

    printMessage(message) {
        return new Program().printMessage(message);
    }
}