export default class OrderService {
    constructor(paymentGateway, notifier, logger) {
        this.paymentGateway = paymentGateway;
        this.notifier = notifier;
        this.logger = logger;
    }

    placeOrder(order) {
        this.paymentGateway.charge(order.total);
        this.notifier.send(order.customerEmail, "Processed order");
        this.logger.log(`Order ${order.id} processed`);
    }
}