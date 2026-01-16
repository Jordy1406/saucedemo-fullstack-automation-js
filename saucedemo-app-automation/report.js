const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true, // Otomatis buka browser setelah selesai
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Android App",
        "Platform": "Android",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};

reporter.generate(options);