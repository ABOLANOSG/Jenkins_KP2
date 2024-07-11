import BasePage from "../../../framework/page/BasePage.js";
import { Input, Label, Button } from "../../../framework/elements/index.js";

class AllGamesPage extends BasePage {
    constructor() {
        super(new Label('//*[contains(@class,"TopModule_show-on-med")]'), "All Games Page");
        this.inputSearch= new Input('//*[@id="search"]', 'Input Search');
        this.gameButton=new Button('//*[contains(@class, "product-title")]', 'First Option');
    };

    async insertInputSearch(gameName) {
        await this.inputSearch.typeText(gameName);
    };

    async getTextFromGameTitle() {
        return await this.gameButton.getText();
    }
}

export default new AllGamesPage();