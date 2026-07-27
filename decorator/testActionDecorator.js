export default class TestActionDecorator {
    constructor(testAction) {
        this.testAction = testAction;
    }

    async execute() {
        return this.testAction.execute();
    }
}
