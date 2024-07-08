import MainPage from '../pageObjects/MainPage.js';
import DropdownPage from '../pageObjects/DropdownPage.js';
import { assert } from 'chai';

describe('Dropdown Page', function () {
    it('Testing interactions with main page and sropdown element', async function () {
        assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not open');
        await MainPage.clickNavigationLink('Dropdown');

        //check if dropdown page is open
        assert.isTrue(await DropdownPage.isPageOpened(), 'Dropdown page is displayed');
        //await DropdownPage.selectOptionDropdown();

    })
})