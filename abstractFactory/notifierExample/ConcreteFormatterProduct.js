import ReportFormatter from "./AbstractFormatterProducts.js";

export class EmailReportFormatter extends ReportFormatter {
    format(testResult) {
        return `Email report: ${testResult.name} - ${testResult.status}`;
    }
}

export class SlackReportFormatter extends ReportFormatter {
    format(testResult) {
        return `Slack report: [${testResult.status}] ${testResult.name}`;
    }
}