let platforms = {
    mobile: '--window-size=500,800',
    desktop: '--window-size=1280,800'
};

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['features/*.feature'],

    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            'support/world.js',
            'step_difinitions/*.js'
        ],
        format: 'json:test/reports/cucumber/report.json',
        strict: true
    },
    plugins: [
        {
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                removeOriginalJsonReportFile: true,
                jsonOutputPath: './test/reports/cucumber',
                reportPath: './test/reports/cucumberHtml/html'
            }
        }
    ],
    // format : 'rerun:test/reports/@rerun.txt',
    // format : 'pretty',
    //"json:test/reports/cucumber.json"],
    // resultJsonOutputFile: 'report.json',

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        // browser.driver.manage().window().maximize();
        let chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(require('chai-smoothie'));
        chai.use(chaiAsPromised);

    }
};