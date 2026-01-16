const { Given, When, Then } = require('@cucumber/cucumber');
const SaucePages = require('../pages/SaucePages');

Given('Saya login ke SauceDemo dengan user {string}', async function (username) {
    // Inisialisasi POM
    this.saucePages = new SaucePages(this.page);
    await this.saucePages.gotoLoginPage();
    await this.saucePages.login(username, 'secret_sauce');
});

When('Saya menambah barang ke keranjang', async function () {
    await this.saucePages.addToCart();
});

When('Saya checkout dengan data {string}, {string}, {string}', async function (fname, lname, zip) {
    await this.saucePages.checkout(fname, lname, zip);
});

Then('Muncul pesan sukses {string}', async function (message) {
    await this.saucePages.validateSuccessMessage(message);
});