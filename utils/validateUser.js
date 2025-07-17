import AgeValidator from "../chainOfResponsability/AgeValidator.js";
import PhoneValidator from "../chainOfResponsability/PhoneValidator.js";
import LocationValidator from "../chainOfResponsability/LocationValidator.js";

export function validateUser(user) {
    const age = new AgeValidator();
    const phone = new PhoneValidator();
    const location = new LocationValidator();

    age.setNext(phone).setNext(location);

    return age.check(user);
}