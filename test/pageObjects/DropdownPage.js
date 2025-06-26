import BasePage from "../../framework/page/BasePage.js";
import {Label, Dropdown} from "../../framework/elements/index.js";

class DropdownPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="example"]'), 'Dropdown Page');

        this.dropdownElement = new Dropdown('//*[@id= "dropdown"]', "Dropdown Element");
        this.selectedOption = new Label('//*[@selected="selected"]', 'Selected option');

    };


     async selectOptionDropdown(value) {
        await this.dropdownElement.selectOptionByText(value);
     };

     async getTextFromSelectedOption() {
        return await this.selectedOption.getText();
     };
}

export default new DropdownPage();