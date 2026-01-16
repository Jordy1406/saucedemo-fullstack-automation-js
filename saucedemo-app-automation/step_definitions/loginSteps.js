const { Given, When } = require('@cucumber/cucumber');
const LoginMobilePage = require('../pages/LoginMobilePage');

Given('Saya membuka aplikasi SauceDemo', async function () {
    this.loginMobilePage = new LoginMobilePage(this.driver);
});

When('Saya login dengan username {string} dan password {string}', async function (u, p) {
    await this.loginMobilePage.login(u, p);
});