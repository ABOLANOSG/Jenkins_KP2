import { assert } from "chai";
import TestAction from "../../decorator/testAction.js";
import LoggingDecorator from "../../decorator/loggingDecorator.js";
import RetryDecorator from "../../decorator/retryDecorator.js";

describe("Testing Decorator pattern", function () {
    it("should execute the original component", async function () {
        const action = new TestAction(async () => "Action executed");

        const result = await action.execute();

        assert.equal(result, "Action executed");
    });

    it("should add logging without changing the original component", async function () {
        const messages = [];
        const logger = {
            log(message) {
                messages.push(message);
            }
        };

        const action = new TestAction(async () => "Action executed");
        const decoratedAction = new LoggingDecorator(action, logger);

        const result = await decoratedAction.execute();

        assert.equal(result, "Action executed");
        assert.deepEqual(messages, [
            "Action started",
            "Action completed"
        ]);
    });

    it("should retry a failed action until it succeeds", async function () {
        let executionCount = 0;
        const action = new TestAction(async () => {
            executionCount++;

            if (executionCount < 3) {
                throw new Error("Temporary failure");
            }

            return "Action succeeded";
        });
        const decoratedAction = new RetryDecorator(action, 3);

        const result = await decoratedAction.execute();

        assert.equal(result, "Action succeeded");
        assert.equal(executionCount, 3);
    });

    it("should throw the last error after reaching the attempt limit", async function () {
        let executionCount = 0;
        const action = new TestAction(async () => {
            executionCount++;
            throw new Error(`Failure ${executionCount}`);
        });
        const decoratedAction = new RetryDecorator(action, 3);

        try {
            await decoratedAction.execute();
            assert.fail("The last error should have been thrown");
        } catch (error) {
            assert.equal(error.message, "Failure 3");
        }

        assert.equal(executionCount, 3);
    });

    it("should combine retry and logging decorators", async function () {
        let executionCount = 0;
        const messages = [];
        const logger = {
            log(message) {
                messages.push(message);
            }
        };

        const action = new TestAction(async () => {
            executionCount++;

            if (executionCount === 1) {
                throw new Error("Temporary failure");
            }

            return "Action succeeded";
        });

        const decoratedAction = new LoggingDecorator(
            new RetryDecorator(action, 2),
            logger
        );

        const result = await decoratedAction.execute();

        assert.equal(result, "Action succeeded");
        assert.equal(executionCount, 2);
        assert.deepEqual(messages, [
            "Action started",
            "Action completed"
        ]);
    });

    it("should reject an invalid maximum number of attempts", function () {
        const action = new TestAction(async () => "Action executed");

        assert.throws(
            () => new RetryDecorator(action, 0),
            "Maximum attempts must be at least 1"
        );
    });
});
