import TestActionDecorator from "./testActionDecorator.js";

// Concrete Decorator: registra el inicio, éxito o fallo de una acción.
export default class LoggingDecorator extends TestActionDecorator {
    constructor(testAction, logger) {
        super(testAction);
        this.logger = logger;
    }

    async execute() {
        this.logger.log("Action started");

        try {
            const result = await super.execute();
            this.logger.log("Action completed");
            return result;
        } catch (error) {
            this.logger.log(`Action failed: ${error.message}`);
            throw error;
        }
    }
}
