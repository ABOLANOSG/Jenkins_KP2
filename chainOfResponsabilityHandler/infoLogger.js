import Handler from "./Handler.js";

export default class InfoLogger extends Handler {
    handle(request) {
        console.log(`this is infoLogger and ${request.level} passed through here`);
        if(request.level === "info") {
            console.log(`info: ${request.message}`);
        } else {
            super.handle(request);
        }
    }
}