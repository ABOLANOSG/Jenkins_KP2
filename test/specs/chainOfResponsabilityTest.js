import UserModel from "../../chainOfResponsability/UserModel.js";
import AgeValidator from "../../chainOfResponsability/AgeValidator.js";
import PhoneValidator from "../../chainOfResponsability/PhoneValidator.js";
import LocationValidator from "../../chainOfResponsability/LocationValidator.js";
import { assert } from "chai";

describe('testing design patterns', function () {
    it("Test the chain of responsability: should validate a correct user", async function () {
        const user = new UserModel(25, "1234567890", "Mexico");
        const age = new AgeValidator();
        const phone = new PhoneValidator();
        const location = new LocationValidator();
        age.setNext(phone).setNext(location); //aqui se hace la cadena de responsabilidades

        const result = age.check(user);
        assert.isTrue(result.valid, `${result.message}`);
    });
    /*it("Test the chain of responsability: should fail on age", async function () {
        const user = { age: 17, phone: "1234567890", location: "Mexico" };
        const result = validateUser(user);
        assert.isFalse(result.valid, `result.message`);
        assert.include(result.message, "Age");
    });
    it("Test the chain of responsability: should fail on phone", async function () {
        const user = { age: 25, phone: "12345678901", location: "Mexico" };
        const result = validateUser(user);
        assert.isFalse(result.valid, `result.message`);
        assert.include(result.message, "Phone");
    });
    it("Test the chain of responsability: should fail on location", async function () {
        const user = { age: 25, phone: "1234567890", location: "Mex!co" };
        const result = validateUser(user);
        assert.isFalse(result.valid, `result.message`);
        assert.include(result.message, "Location");
    });*/
});