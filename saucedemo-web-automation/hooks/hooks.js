const { BeforeAll, AfterAll, Before, After, Status } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test'); // Untuk Web
const { remote } = require('webdriverio'); // Untuk Aplikasi (Appium)

// Variabel global agar bisa diakses AfterAll
let browser;

Before(async function (scenario) {
    const type = process.env.TYPE; // Kita ambil dari terminal: 'web' atau 'mobile'

    if (type === 'mobile') {
        // --- LOGIKA APPIUM (Aplikasi Mobile) ---
        console.log("📱 Menjalankan Automation Aplikasi Mobile...");
        const caps = {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'AndroidDevice',
            'appium:appPackage': 'com.swaglabsmobileapp', // Ganti ID Aplikasi Mas
            'appium:appActivity': 'com.swaglabsmobileapp.MainActivity', 
            'appium:noReset': true
        };

        this.driver = await remote({
            path: '/',
            port: 4723,
            capabilities: caps
        });
        this.isMobileApp = true;

    } else {
        // --- LOGIKA PLAYWRIGHT (Web Desktop) ---
        console.log("💻 Menjalankan Automation Web Desktop...");
        if (!browser) {
            browser = await chromium.launch({ 
                headless: false, //diganti false jika ingin melihat browser terbuka
                channel: 'chrome', 
                slowMo: 500, 
                args: ['--start-maximized'] 
            });
        }
        this.context = await browser.newContext({ viewport: null });
        this.page = await this.context.newPage();
        
        // Trik Full Screen
        const session = await this.page.context().newCDPSession(this.page);
        const { windowId } = await session.send('Browser.getWindowForTarget');
        await session.send('Browser.setWindowBounds', { windowId, bounds: { windowState: 'maximized' } });
        
        this.isMobileApp = false;
    }
});

After(async function (scenario) {
    // Screenshot Logik
    if (scenario.result.status === Status.FAILED) {
        if (this.isMobileApp) {
            const screenshot = await this.driver.takeScreenshot();
            this.attach(Buffer.from(screenshot, 'base64'), 'image/png');
        } else {
            const image = await this.page.screenshot({ fullPage: true });
            this.attach(image, 'image/png');
        }
    }

    // Cleanup
    if (this.isMobileApp) {
        await this.driver.deleteSession();
    } else {
        await this.page.close();
        await this.context.close();
    }
});

AfterAll(async function () {
    if (browser) {
        await browser.close();
    }
});