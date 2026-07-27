import { assert } from "chai";
import CheckoutFacade from "../../facade/CheckoutFacade.js";

describe("Testing Facade Pattern", function () {
    it("Should coordinate all subsystems to complete an order", function () {
        const checkout = new CheckoutFacade();

        const orderResult = checkout.completeOrder(
            {
            name: "Ana Lopez",
            email: "ana@example.com"
            },
            "PROD-001",
            2,
            499.99,
            "Av. Reforma 222, CDMX"
        );

        assert.deepEqual(orderResult, {
            status: "Complete",
            transactionId: "TXN-12345",
            trackingId: "TRACK-98765"
        });
    });
});