import Notifier from "./AbstractNotifierProducts.js";

export class EmailNotifier extends Notifier {
    send(message) {
        return `Email sent: ${message}`;
    }
}

export class SlackNotifier extends Notifier {
    send(message) {
        return `Slack message sent: ${message}`;
    }
}