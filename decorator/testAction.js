// Concrete Component: acción base a la que se agregarán responsabilidades.
export default class TestAction {
    constructor(action) {
        this.action = action;
    }

    async execute() {
        return this.action();
    }
}
