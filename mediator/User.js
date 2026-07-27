import Colleague from "./Colleague.js";

export default class User extends Colleague {
    constructor(name) {
        super(name);
        this.isMuted = false;
        this.receivedMessages = [];
    }

    send(message, to = null) {
        if (!this.mediator) {
            throw new Error(`${this.name} is not registered in chat room`);
        }

        return this.mediator.send(
            message, this, to
        )
    }

    receive(message, from, isPrivate = false) {
        this.receivedMessages.push({
            sender: from.name,
            message,
            type: isPrivate ? "private" : "public"
        });
    }

    mute() {
        this.isMuted = true;
    }

    unmute() {
        this.isMuted = false;
    }


}