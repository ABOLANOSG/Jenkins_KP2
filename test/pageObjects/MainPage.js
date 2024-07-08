import BasePage from "../../framework/page/BasePage.js";
import { Button, Label } from "../../framework/elements/index.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class MainPage extends BasePage {
    constructor() {
        super(new Label('//h1[@class="heading"]', 'Welcome header'), 'Main Page');

        this.navigationLink = (text) => new Button(PreciseTextLocator(text), `Navigation link: ${text}`);
        
    };

    async clickNavigationLink(navigationText) {
        await this.navigationLink(navigationText).click();
    };
};

export default new MainPage;