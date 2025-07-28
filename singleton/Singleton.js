import DummyUser from "../utils/DummyUser.js";

export default class UserPool {
    constructor() {
        const poolSize = 1;
        if (!UserPool.instance) {
            this.poolUsers = [];
            for(let i = 0; i < poolSize; i++) {
                this.poolUsers.push(new DummyUser(i));
            }

            UserPool.instance = this;
            return UserPool.instance;
        }

        return UserPool.instance;
    }

    getUser() {
     return this.poolUsers[0];
    }

    getUserId() {
        return this.poolUsers[0].getId();
    }

}
