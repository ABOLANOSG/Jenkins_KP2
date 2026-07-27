import { assert } from "chai";
import UserPrototype from "../../prototype/UserPrototype.js";

describe("Testing Prototype Pattern", function () {
    it("Should clone the original user prototype", function () {
        const originalUser = new UserPrototype({
            name: "QA user",
            email: "qa@example.com",
            role: "customer",
            active: true
        });

        const clonedUser = originalUser.clone();

        assert.notStrictEqual(clonedUser, originalUser);
        assert.deepEqual(clonedUser.userData, originalUser.userData);
    });

    it("Should override selected properties", function () {
        const originalUser = new UserPrototype({
            name: "QA user",
            email: "qa@example.com",
            role: "customer",
            active: true
        });

        const adminUser = originalUser.clone({
            email: "admin@example.com",
            role: "admin"
        });

        assert.equal(adminUser.userData.role, "admin");
        assert.equal(adminUser.userData.email, "admin@example.com");
        assert.equal(adminUser.userData.name, "QA user");

    });
});