import singletonPoolInstance from "../../singleton/Singleton.js";
import { assert } from "chai";

describe('testing design patterns', function () {
    it("Test the singleton pool pattern", async function () {
        const user1 = singletonPoolInstance.getUser();
        const user2 = singletonPoolInstance.getUser();

        assert.isTrue(user1 === user2, `Instances are equal because is the same user`);
    });
});