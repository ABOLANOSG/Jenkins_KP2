export default class Validator {
    setNext(validator) {
        this.next = validator;
        return validator;
    }
    check(user) {
        if (this.next) {
            return this.next.check(user);
        }
        return {valid: true, message: "All the data is valid"};
    }
}