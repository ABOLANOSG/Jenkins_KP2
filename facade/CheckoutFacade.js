import { InventoryService, PaymentService, ShippingService, NotificationService } from "./Subsistems.js"

export default class CheckoutFacade {
    constructor() {
        this.inventory = new InventoryService();
        this.payment = new PaymentService();
        this.shipping = new ShippingService();
        this.notifications = new NotificationService();
    }

    completeOrder(customer, productId, quantity, amount, address) {
        if (!this.inventory.checkStock(productId, quantity)) {
            throw new Error("Out of stock")
        };

        this.inventory.reserveStock(productId, quantity);

        const paymentResult = this.payment.charge(customer, amount);
        if (!paymentResult.success) {
            throw new Error("Payment rejected");
        }

        const shippingResult = this.shipping.scheduleDelivery(customer, address);

        this.notifications.sendConfirmation(customer, {
            transactionId: paymentResult.transactionId,
            trackingId: shippingResult.trackingId
        });

        return {
            status: "Complete",
            transactionId: paymentResult.transactionId,
            trackingId: shippingResult.trackingId
        }

    }
}