import { assert } from "chai";
import ProductSubject from "../../observer/subject.js";
import {EmailNotifier, SMSNotifier, AnaliticsLogger} from "../../observer/concreteObserver.js";

describe("Testing Observer pattern with Product", function () {

    it("should subscribe observers to the product", function () {
        const productSubject = new ProductSubject("Laptop Gamer", 25000, 0); 
        const emailObserver = new EmailNotifier();
        const smsObserver = new SMSNotifier();

        productSubject.subscribe(emailObserver);
        productSubject.subscribe(smsObserver);

        assert.lengthOf(productSubject.observers, 2);
        assert.include(productSubject.observers, emailObserver);
        assert.include(productSubject.observers, smsObserver);
    });

    it("should notify email and analytics when price changes", function() {
        const productSubject = new ProductSubject("Laptop Gamer", 25000, 0); 
        const emailObserver = new EmailNotifier();
        const smsObserver = new SMSNotifier();
        const analytics = new AnaliticsLogger();

        productSubject.subscribe(emailObserver);
        productSubject.subscribe(smsObserver);
        productSubject.subscribe(analytics);

        productSubject.changePrice(21000);

        assert.equal(productSubject.price, 21000);

        assert.lengthOf(emailObserver.messages, 1);

        assert.lengthOf(smsObserver.messages, 0); //smsNotifier onli reacts to restock
    });
});