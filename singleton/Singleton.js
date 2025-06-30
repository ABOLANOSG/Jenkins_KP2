import DummyUser from "../utils/DummyUser.js";

class SingletonPool {
    constructor() {
        if (!SingletonPool.instance) {
            this.user = null;
            SingletonPool.instance = this;
        }
        return SingletonPool.instance;
    }

    getUser() {
        if (!this.user) {
            this.user = new DummyUser();
        }
        return this.user;
    }

}

const singletonPoolInstance = new SingletonPool();

export default singletonPoolInstance;