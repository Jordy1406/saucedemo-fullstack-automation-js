const { expect } = require('@playwright/test');

class SaucePages {
    constructor(page) {
        this.page = page;
        // Selector (Locator)
        this.userInput = '#user-name';
        this.passInput = '#password';
        this.loginBtn = '#login-button';
        this.productBackpack = '#add-to-cart-sauce-labs-backpack';
        this.cartIcon = '.shopping_cart_link';
        this.checkoutBtn = '#checkout';
        this.firstNameInput = '#first-name';
        this.lastNameInput = '#last-name';
        this.zipInput = '#postal-code';
        this.continueBtn = '#continue';
        this.finishBtn = '#finish';
        this.successHeader = '.complete-header';
    }

    // Actions (Fungsi)
    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user, pass) {
        await this.page.fill(this.userInput, user);
        await this.page.fill(this.passInput, pass);
        await this.page.click(this.loginBtn);
    }

    async addToCart() {
        await this.page.click(this.productBackpack);
        await this.page.click(this.cartIcon);
    }

    async checkout(fname, lname, zip) {
        await this.page.click(this.checkoutBtn);
        await this.page.fill(this.firstNameInput, fname);
        await this.page.fill(this.lastNameInput, lname);
        await this.page.fill(this.zipInput, zip);
        await this.page.click(this.continueBtn);
        await this.page.click(this.finishBtn);
    }

    async validateSuccessMessage(msg) {
        const text = await this.page.textContent(this.successHeader);
        expect(text).toBe(msg);
    }
}

module.exports = SaucePages;