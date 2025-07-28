import Validator from "./Validator.js";

export default class PhoneValidator extends Validator {
    check(user) {
        if (!/^\d{1,10}$/.test(user.phoneNumber)) {
            return {valid: false, message: "Phone number must have max 10 digits"};
        }
        return super.check(user);
    }
}