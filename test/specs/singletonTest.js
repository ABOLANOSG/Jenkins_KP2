//import UserPoolInstance from "../../singleton/Singleton.js";
import UserPool from "../../singleton/Singleton.js";
import { assert } from "chai";

describe('testing design patterns', function () {
    it("Test the singleton pool pattern", async function () {
        const userPool1 = new UserPool();
        const userPool2 = new UserPool();
        const user1 = userPool1.getUser();
        const user2 = userPool2.getUser();
        
        assert.isTrue(userPool1 === userPool2, `Instances are equal because is the same user`);
        assert.isTrue(user1 === user2, `Instances are equal because is the same user`);
    });
});