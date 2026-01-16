// PERHATIKAN: setDefaultTimeout harus ada di dalam kurung kurawal ini
const { Before, After, Status, setDefaultTimeout } = require('@cucumber/cucumber'); 
const { remote } = require('webdriverio');

// Sekarang ini tidak akan error lagi
setDefaultTimeout(60000); 

const caps = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'AndroidDevice',
    'appium:appPackage': 'com.swaglabsmobileapp', 
    'appium:appActivity': 'com.swaglabsmobileapp.MainActivity',
    'appium:noReset': true,
};

Before(async function () {
    this.driver = await remote({
        protocol: 'http',
        hostname: '127.0.0.1', 
        port: 4723,
        path: '/wd/hub', 
        capabilities: caps
    });
});

After(async function (scenario) {
    if (this.driver) {
        // Jika gagal, ambil screenshot dan tempel ke laporan
        if (scenario.result.status === Status.FAILED) {
            const screenshot = await this.driver.takeScreenshot();
            this.attach(Buffer.from(screenshot, 'base64'), 'image/png');
        }
        await this.driver.deleteSession();
    }
});