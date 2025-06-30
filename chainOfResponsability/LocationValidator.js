import Validator from "./Validator.js";

export default class LocationValidator extends Validator {
    check(user) {
        if (/[#@!]/.test(user.location)) {
            return {valid: false, message: "Location must not contain special symbols (#@!)"};
        }
        return super.check(user);
    }
}