import { assert } from "chai";
import UserApi from "../../proxy/userApi.js";
import UserApiProxy from "../../proxy/userApiProxy.js";

describe("Testing Proxy pattern", function () {
    it("should delegate an authorized request to the real API", async function () {
        const realApi = new UserApi();
        const proxy = new UserApiProxy(realApi, "valid-token");

        const user = await proxy.getUser(10);

        assert.deepEqual(user, {
            id: 10,
            name: "QA User",
            role: "tester"
        });
        assert.equal(realApi.requestCount, 1);
    });

    it("should return the cached user for repeated requests", async function () {
        const realApi = new UserApi();
        const proxy = new UserApiProxy(realApi, "valid-token");

        const firstResult = await proxy.getUser(10);
        const secondResult = await proxy.getUser(10);

        assert.strictEqual(firstResult, secondResult);
        assert.equal(realApi.requestCount, 1);
    });

    it("should call the real API for different users", async function () {
        const realApi = new UserApi();
        const proxy = new UserApiProxy(realApi, "valid-token");

        await proxy.getUser(10);
        await proxy.getUser(20);

        assert.equal(realApi.requestCount, 2);
    });

    it("should reject requests without an authorization token", async function () {
        const realApi = new UserApi();
        const proxy = new UserApiProxy(realApi, null);

        try {
            await proxy.getUser(10);
            assert.fail("The request should have been rejected");
        } catch (error) {
            assert.equal(error.message, "Unauthorized request");
        }

        assert.equal(realApi.requestCount, 0);
    });

});
