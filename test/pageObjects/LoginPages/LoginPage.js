import BasePage from "../../../framework/page/BasePage.js";
import { Label, Input, Button } from "../../../framework/elements/index.js";
import { PreciseTextLocator, idLocator } from "../../../framework/utils/locatorHelper.js";


class LoginPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Login Page')), 'Login Page');
        this.userInput = new Input(idLocator('username'), 'Username Input');
        this.passwordInput = new Input(idLocator('password'), 'Password input');
        this.loginButtton = new Button(PreciseTextLocator(' Login'));
    };

    async inputDataIntoInputUser(data) {
        await this.userInput.typeText(data);
    };

    async inputDataIntoPasswordInput(data) {
        await this.passwordInput.typeText(data);
    };

    async clickToLogin() {
        await this.loginButtton.click();
    }
};

export default new LoginPage();