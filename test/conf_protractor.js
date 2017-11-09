
let platforms = {
    mobile: '--window-size=500,800',
    desktop:'--window-size=1280,800'
};

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['features/*.feature'],

    capabilities:{
        'browserName': 'chrome'
        },
   framework: 'custom',

   frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts : {
        require : [
            'support/world.js',
            'step_difinitions/*.js'
        ]
    },

    onPrepare: function(){
        browser.ignoreSynchronization = true;
       // browser.driver.manage().window().maximize();
        let chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(require('chai-smoothie'));
        chai.use(chaiAsPromised);

    }
};