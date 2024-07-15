import DiscoverPage from "../pageObjects/ParadoxPages/DiscoverPage.js";
import AllGamesPage from "../pageObjects/ParadoxPages/AllGamesPage.js";
import {searchedGames} from "../TestData/TestDataParadox.js";
import { assert } from "chai";
import Browser from "../../framework/browser/Browser.js";
import allureReporter from "@wdio/allure-reporter";

describe('Interactions with Paradox Page', function () {
    it('Clicking and testing pages fromm main page', async function () {
        allureReporter.addOwner('Astrid Andrea Bolanos Garcia');
        allureReporter.addLink('https://github.com/a1qa-education/A.BOLANOS/tree/unit_3_mentor_survey');
        allureReporter.addSeverity('Major');
        await Browser.Window.resize({ width: 1920, height: 1024 });
        assert.isTrue(await DiscoverPage.isPageOpened(), 'Discover Page is not open');
        await DiscoverPage.clickOnAllGamesButton();

        await AllGamesPage.insertInputSearch(searchedGames.page);
        assert.strictEqual(await AllGamesPage.getTextFromGameTitle(), searchedGames.page);

    })
})