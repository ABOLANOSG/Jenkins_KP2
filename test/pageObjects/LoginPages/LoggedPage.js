import BasePage from "../../../framework/page/BasePage.js";
import {Label, Button } from "../../../framework/elements/index.js";
import { classLocator, PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";

class LoggedPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator(' Secure Area')), 'Logged to Secure Area Page');

        this.logMessage = new Label(classLocator('flash success'), 'You logged into a secure area!');
        this.logOutButton = new Button(PreciseTextLocator(' Logout'), 'Logout Button');
    };

    async logginSuccessfull() {
        return await this.logMessage.state().isDisplayed();
    };
    async clickOnLogOutButton() {
        await this.logOutButton.click();
    }
};

export default new LoggedPage();