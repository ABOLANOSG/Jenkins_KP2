import NotificationFactory from "./AbstractFactory.js";
import { EmailNotifier } from "./ConcreteNotifierProduct.js";
import { EmailReportFormatter } from "./concreteFormatterProduct.js";

export default class EmailNotificationFactory extends NotificationFactory {
    createNotifier() {
        return new EmailNotifier();
    }

    createReportFormatter() {
        return new EmailReportFormatter();
    }
}