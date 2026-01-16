const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Project": "SauceDemo Automation",
        "Test Environment": "STAGING",
        "Browser": "Google Chrome",
        "Platform": process.env.TYPE === 'mobile' ? 'Mobile (iPhone 13)' : 'Web Desktop'
    }
};

reporter.generate(options);