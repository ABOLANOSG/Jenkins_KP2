import DiscoverPage from "../pageObjects/ParadoxPages/DiscoverPage.js";
import AllGamesPage from "../pageObjects/ParadoxPages/AllGamesPage.js";
import {searchedGames} from "../TestData/TestDataParadox.js";
import { assert } from "chai";
import Browser from "../../framework/browser/Browser.js";

describe('Interactions with Paradox Page', function () {
    it('Clicking and testing pages fromm main page', async function () {
        await Browser.Window.resize({ width: 1920, height: 1024 });
        assert.isTrue(await DiscoverPage.isPageOpened(), 'Discover Page is not open');
        await DiscoverPage.clickOnAllGamesButton();

        await AllGamesPage.insertInputSearch(searchedGames.page);
        assert.strictEqual(await AllGamesPage.getTextFromGameTitle(), searchedGames.page);

    })
})