export default class UserPrototype {
    constructor(userData) {
        this.userData = userData;
    }

    clone(overrides = {}) {
        const clonedData = structuredClone(this.userData);
        return new UserPrototype({
            ...clonedData,
            ...overrides
        })
    }
}