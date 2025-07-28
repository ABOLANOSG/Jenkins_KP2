import AnotherProgram from "../../delegation/AnotherProgram.js";
import { assert } from "chai";

describe("Testing delegation ", function () {
    it("Tests if AnotherProgram is delegating print to Program", async function () {
        const anotherProgram = new AnotherProgram();
        console.log(anotherProgram.printMessage("Hola"))
        assert.isTrue(anotherProgram.printMessage("Hola") === `The message to print is : Hola`, "Error, message is not equal to expected message");
    });
})