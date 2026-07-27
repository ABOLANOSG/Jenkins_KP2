export default class ChatRoom {
    register(user) {
        throw new Error(
            "register(user) must be implemented"
        );
    }

    send(message, from, to = null) {
        throw new Error(
            "send(message, from, to) must be implemented"
        );
    }
    removeUser(userName) {
        throw new Error(
            "removeUser(userName) must be implemented"
        );
    }
} 