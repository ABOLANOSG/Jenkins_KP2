import { assert } from "chai";
import EmailNotificationFactory from "../../abstractFactory/notifierExample/ConcreteEmailFactory.js";
import SlackNotificationFactory from "../../abstractFactory/notifierExample/ConcreteSlackFactory.js";
import { EmailNotifier, SlackNotifier } from "../../abstractFactory/notifierExample/ConcreteNotifierProduct.js";
import { EmailReportFormatter, SlackReportFormatter } from "../../abstractFactory/notifierExample/concreteFormatterProduct.js";

describe("Testing Abstract Factory", function () {
    it("should create the email product family", function () {
        const emailFactory = new EmailNotificationFactory();
        const notifier = emailFactory.createNotifier();
        const formatter = emailFactory.createReportFormatter();

        assert.instanceOf(notifier, EmailNotifier);
        assert.instanceOf(formatter, EmailReportFormatter);

        const report = formatter.format({
            name: "Login test",
            status: "PASSED"
        });

        assert.equal(report, "Email report: Login test - PASSED");
        assert.equal(notifier.send(report), `Email sent: ${report}`);
    });

    it("should create the slack product family", function () {
        const slackFactory = new SlackNotificationFactory();
        const notifier = slackFactory.createNotifier();
        const formatter = slackFactory.createReportFormatter();

        assert.instanceOf(notifier, SlackNotifier);
        assert.instanceOf(formatter, SlackReportFormatter);

        const report = formatter.format({
            name: "Checkout test",
            status: "FAILED"
        });

        assert.equal(report, "Slack report: [FAILED] Checkout test");
        assert.equal(notifier.send(report), `Slack message sent: ${report}`);
    });
});