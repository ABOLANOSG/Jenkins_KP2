import Handler from "./Handler.js";

export default class ErrorLogger extends Handler {
    handle(request) {
        console.log(`this is errorLogger and ${request.level} passed through here`);
        if(request.level === "error") {
            console.log(`error: ${request.message}`);
        } else {
            super.handle(request);
        }
    }
}