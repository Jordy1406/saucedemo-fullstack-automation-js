class ProductPage {
    constructor(driver) {
        this.driver = driver;
    }

    // Selector
    get firstAddToCartBtn() { return this.driver.$('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]'); }
    get cartIcon() { return this.driver.$('~test-Cart'); }

    // Actions
    async addFirstProductToCart() {
        await this.firstAddToCartBtn.click();
        await this.driver.pause(1000);
        await this.cartIcon.click();
    }
}
module.exports = ProductPage;