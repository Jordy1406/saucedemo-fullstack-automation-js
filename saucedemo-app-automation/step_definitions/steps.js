const { Given, When, Then } = require('@cucumber/cucumber');
const LoginMobilePage = require('../pages/LoginMobilePage');
const CartPage = require('../pages/CartPage');

Given('Saya membuka aplikasi SauceDemo di mobile', async function () {
    this.loginPage = new LoginMobilePage(this.driver);
    this.cartPage = new CartPage(this.driver);
});

When('Saya login dengan user {string}', async function (user) {
    await this.loginPage.login(user, 'secret_sauce');
});

When('Saya menambah barang ke keranjang dan lanjut checkout', async function () {
    await this.loginPage.addItemToCart();
    await this.cartPage.proceedToCheckout('Budi', 'Santoso', '12345');
});

When('Saya menyelesaikan pesanan', async function () {
    await this.cartPage.finishOrder();
});

Then('Saya melihat pesan sukses pembelian', async function () {
    const isVisible = await this.cartPage.txtSuccess.isDisplayed();
    if (!isVisible) throw new Error("Pesan sukses tidak muncul!");
});