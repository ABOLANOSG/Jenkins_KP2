import BasePage from "../../framework/page/BasePage.js";
import {Label, Dropdown} from "../../framework/elements/index.js";

class DropdownPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="example"]'), 'Dropdown Page');

        this.dropdownElement = new Dropdown('//*[@id= "dropdown"]', "Dropdown Element");

    };


     async selectOptionDropdown() {
        await this.dropdownElement.selectOptionByValue('2');
     }
}

export default new DropdownPage();