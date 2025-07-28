import ErrorLogger from "../../chainOfResponsabilityHandler/ErrorLogger.js";
import WarnLogger from "../../chainOfResponsabilityHandler/WarnLogger.js";
import InfoLogger from "../../chainOfResponsabilityHandler/infoLogger.js";
import { assert } from "chai";
import Request from "../../chainOfResponsabilityHandler/Request.js";

describe("Test Chain of responsability handler", function () {
    it("Testing handler is working correctly", async function () {
        const infoLogger = new InfoLogger();
        const warnLogger = new WarnLogger();
        const errorLogger = new ErrorLogger();
        const infoLogger2 = new InfoLogger();
        const request1 = new Request("info", "This is an informational message");
        const request2 = new Request("warn", "This is an warning message");
        const request3 = new Request("error", "This is an error message");
        const request4 = new Request("debug", "This is a debug message");

        infoLogger.setNext(warnLogger).setNext(errorLogger).setNext(infoLogger2);

        //infoLogger.handle(request1);
        //infoLogger.handle(request2);
        //infoLogger.handle(request3);
        infoLogger.handle(request4);
    
    });
})
