import Handler from "./Handler.js";

export default class WarnLogger extends Handler{

    handle(request) {
        console.log(`this is warnLogger and ${request.level} passed through here`);
        if(request.level === "warn") {
            console.log(`warning: ${request.message}`);
        } else {
            super.handle(request);
        }
    }
}