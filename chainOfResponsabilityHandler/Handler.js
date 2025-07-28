export default class Handler {
    constructor() {

    }

    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if(this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        console.log("No handler cut process the request");
    }
}