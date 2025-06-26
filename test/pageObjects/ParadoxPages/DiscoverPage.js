import BasePage from "../../../framework/page/BasePage.js";
import {Button, Label} from "../../../framework/elements/index.js";


class DiscoverPage extends BasePage {
    constructor() {
        super(new Label('//span[text()="Our games"]'), 'Discover Page');

        this.allGamesButton = new Button('//span[text()="All games"]', 'All Games Button');
    }

    async clickOnAllGamesButton(){
        await this.allGamesButton.click();
    }
};

export default new DiscoverPage();