import NotificationFactory from "./AbstractFactory.js";
import { SlackNotifier } from "./ConcreteNotifierProduct.js";
import { SlackReportFormatter } from "./concreteFormatterProduct.js";

export default class SlackNotificationFactory extends NotificationFactory {
    createNotifier() {
            return new SlackNotifier();
    }

    createReportFormatter() {
        return new SlackReportFormatter();
    }
}