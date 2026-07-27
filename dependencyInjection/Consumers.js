export class StripeGateway {
    charge(amount) {console.log(`Charging $${amount} via Stripe`);}
}

export class PayPalGateway {
    charge(amount) {console.log(`Charging $${amount} via PayPal`);}
}

export class EmailNotifier {
    send(to, message) {
        console.log(`Email to ${to}: ${message}`);
    }
}

export class ConsoleLogger {
    log(message) {
        console.log(`[LOG] ${message}`);
    }
}