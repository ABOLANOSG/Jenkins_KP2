import { assert } from "chai";
import OrderService from "../../dependencyInjection/DependencyInjectionService.js";

describe("Testing Dependency Injection", function () {
    it("should use fake payment injected dependencies to process an order", function () {
        const calls = [];

        const fakePaymentGateway = {
            charge(amount) {
                calls.push({
                    dependency: "paymentGateway",
                    method: "charge",
                    arguments: [amount]
                });
            }
        };

        const fakeNotifier = {
            send(to, message) {
                calls.push({
                    dependency: "notifier",
                    method: "send",
                    arguments: [to, message]
                });
            }
        };

        const fakeLogger = {
            log(message) {
                calls.push({
                    dependency: "logger",
                    method: "log",
                    arguments: [message]
                });
            }
        };

        const orderService = new OrderService(
            fakePaymentGateway,
            fakeNotifier,
            fakeLogger
        );

        const order = {id: 34, total: 500, customerEmail: "client@mail.com"};

        orderService.placeOrder(order);

        assert.deepEqual(calls, [
            {
                dependency: "paymentGateway",
                method: "charge",
                arguments: [500]
            },
            {   
                dependency: "notifier",
                method: "send",
                arguments: ["client@mail.com", "Processed order"]
            },
            {
                dependency: "logger",
                method: "log",
                arguments: ["Order 34 processed"]
            }
        ]);
    });
});
