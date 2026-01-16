class CartPage {
    constructor(driver) {
        this.driver = driver;
    }

    // Selector (Locator)
    get btnCheckout() { return this.driver.$('~test-CHECKOUT'); }
    get inputFirstName() { return this.driver.$('~test-First Name'); }
    get inputLastName() { return this.driver.$('~test-Last Name'); }
    get inputZip() { return this.driver.$('~test-Zip/Postal Code'); }
    get btnContinue() { return this.driver.$('~test-CONTINUE'); }
    get btnFinish() { return this.driver.$('~test-FINISH'); }
    get txtSuccess() { return this.driver.$('//*[contains(@text, "THANK YOU")]'); }

    // Actions
    async proceedToCheckout(fname, lname, zip) {
        await this.btnCheckout.click();
        await this.inputFirstName.setValue(fname);
        await this.inputLastName.setValue(lname);
        await this.inputZip.setValue(zip);
        await this.btnContinue.click();
    }

    async finishOrder() {
        // Scroll ke bawah sampai ketemu tombol FINISH (Gunakan UiScrollable Android)
        const finishSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("FINISH"))';
        await this.driver.$(`android=${finishSelector}`);
        await this.btnFinish.click();
    }
}
module.exports = CartPage;