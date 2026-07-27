import ChatRoom from "./Mediator.js";

export default class ConcreteChatRoom extends ChatRoom {
    constructor() {
        super();
        this.users = [];
        this.messageHistory = []
    }

    register(user) {
        const userAlreadyExists = this.users.some(registeredUser => registeredUser.name === user.name);
        if (userAlreadyExists) {
            return false;
        }

        this.users.push(user);
        user.setMediator(this);
        return true;
    }

    send(message, from, to = null) {
        const senderIsRegistered = this.users.includes(from);

        if (!senderIsRegistered) {
            return false;
        }

        if (to) {
            return this.sendPrivateMessage(
                message,
                from,
                to
            );
        }

        return this.sendPublicMessage(
            message,
            from
        )
    }

    sendPrivateMessage(message, from, recipientName) {
        const recipient = this.users.find(user => user.name === recipientName);

        if (!recipient) {
            console.log(`[System] User ${recipientName} does not exist`);
            return false;
        }

        if (recipient.isMuted) {
            console.log(`[System] ${recipientName} has deactivated messages`);
            return false;
        }

        this.messageHistory.push({
            sender: from.name,
            receiver: recipient.name,
            message,
            type: "private"
        });

        recipient.receive(
            message,
            from,
            true
        );

        return true;
    }

    sendPublicMessage(message, from) {
        this.messageHistory.push({
            sender: from.name,
            message,
            type: "public"
        });

        this.notifyUsers(message, from);

        return true;
    }

    notifyUsers(message, from) {
        this.users.forEach(user => {
            const isSender = user === from;
            if (!isSender && !user.isMuted) {
                user.receive(
                    message,
                    from,
                    false
                )
            }
        });
    }

    removeUser(userName) {
        const userIndex = this.users.findIndex(user => user.name === userName);
        if (userIndex === -1) {
            return false;
        }

        const [removedUser] = this.users.splice(userIndex, 1);

        removedUser.setMediator(null);

        return true;
    }
} 