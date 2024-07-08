import MainPage from "../pageObjects/MainPage.js";
import LoginPage from "../pageObjects/LoginPages/LoginPage.js";
import LoggedPage from "../pageObjects/LoginPages/LoggedPage.js";
import { loginData } from "../TestData/TestDataLogin.js";
import { assert } from "chai";

describe('Aunthentication Page test', function () {
    it('Should complete the login and comproves it was correct', async function () {
        assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not open');
        await MainPage.clickNavigationLink(loginData.page);

        assert.isTrue(await LoginPage.isPageOpened(), 'Login page is not displayed');
        await LoginPage.inputDataIntoInputUser(loginData.userNameData);
        await LoginPage.inputDataIntoPasswordInput(loginData.passwordData);
        await LoginPage.clickToLogin();
        
        assert.isTrue(await LoggedPage.logginSuccessfull(), 'Incorrect Values, Login Failed');
        await LoggedPage.clickOnLogOutButton();

        assert.isTrue(await LoginPage.isPageOpened(), 'Login page is not displayed');
    })
})