import Validator from "./Validator.js";

export default class AgeValidator extends Validator {
    check(user) {
        if (user.age <= 18 ) {
            return {valid: false, message: "Age must be higher than 18"};
        }
        return super.check(user);
    }
}