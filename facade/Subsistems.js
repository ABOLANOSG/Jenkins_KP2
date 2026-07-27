export class InventoryService {
    checkStock(productId, quantity) {
        console.log(`Verifying ${productId} in stock`);
        return true;
    }

    reserveStock(productId, quantity) {
        console.log(`Reserve ${quantity} items of ${productId}`)
    }
}

export class PaymentService {
    charge(customer, amount) {
        console.log(`Charging $${amount} to ${customer.name}`);
        return { success: true, transactionId: "TXN-12345"};
    }
}

export class ShippingService {
    scheduleDelivery(customer, address) {
        console.log(`Scheduling shipment to ${address} to ${customer.name}`);
        return { trackingId: "TRACK-98765" };
    }
}

export class NotificationService {
    sendConfirmation(customer, orderDetails) {
        console.log(`Sending confirmation message to ${customer.email}`, orderDetails);
    }
}