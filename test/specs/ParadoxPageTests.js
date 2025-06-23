import DiscoverPage from "../pageObjects/ParadoxPages/DiscoverPage.js";
import AllGamesPage from "../pageObjects/ParadoxPages/AllGamesPage.js";
import {searchedGames, testData} from "../TestData/TestDataParadox.js";
import { assert } from "chai";
import Browser from "../../framework/browser/Browser.js";
import allureReporter from "@wdio/allure-reporter";

describe('Interactions with Paradox Page', function () {
    it('Clicking and testing pages fromm main page', async function () {
        allureReporter.addOwner('Astrid Andrea Bolanos Garcia');
        allureReporter.addLink('https://github.com/a1qa-education/A.BOLANOS/tree/unit_3_mentor_survey');
        allureReporter.addSeverity('Major');
        allureReporter.addStep("Resize window");
        await Browser.Window.resize({ width: 1920, height: 1024 });
        allureReporter.addStep("Verify if discover page is open");
        assert.isTrue(await DiscoverPage.isPageOpened(), 'Discover Page is not open');
        allureReporter.addStep("Click all game button");
        await DiscoverPage.clickOnAllGamesButton();
        allureReporter.addStep("insert input and check title");
        await AllGamesPage.insertInputSearch(searchedGames.page);
        allureReporter.addStep("Assert game title is correct");
        assert.strictEqual(await AllGamesPage.getTextFromGameTitle(), searchedGames.page);

    });

    testData.forEach(({a, b, expected}) => {
        it(`Should return ${expected} for ${a} + ${b}`, function () {
            const result = a+b;
            assert.strictEqual(result, expected, `Test failed actual result: ${result}, does not match with expected: ${expected}`);
        });
    });
})