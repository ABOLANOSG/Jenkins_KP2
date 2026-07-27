import TestActionDecorator from "./testActionDecorator.js";

export default class RetryDecorator extends TestActionDecorator {
    constructor(testAction, maximumAttempts = 3) {
        super(testAction);

        if (maximumAttempts < 1) {
            throw new Error("Maximum attempts must be at least 1");
        }

        this.maximumAttempts = maximumAttempts;
    }

    async execute() {
        let lastError;

        for (let attempt = 1; attempt <= this.maximumAttempts; attempt++) {
            try {
                return await super.execute();
            } catch (error) {
                lastError = error;
            }
        }

        throw lastError;
    }
}
