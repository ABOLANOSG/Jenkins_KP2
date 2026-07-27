export default class Colleague {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    send(message, to = null) {
        throw new Error(
            "send(message, to) must be implemented"
        );
    }

    receive(message, from, isPrivate = false) {
        throw new Error(
            "receive(message, from, isPrivate) must be implemented"
        );
    }
    
}