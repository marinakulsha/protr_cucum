let fs = require('fs');

let helper = {

    createScreenshot() {
        let fullName = `${name}-${Math.round(Math.random() * 899 + 100)}.png`;
        console.log(fullName);
        return browser.takeScreenshot().then(function (png) {
            let stream = fs.createWriteStream(`test/reports/cucumber/${fullName}`);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        })
    },

    attachedscreenshot(scenario) {
        let self = this;
        if (scenario.result.status !== 'passed') {
            return self.createScreenshot()
                .then(function (png) {
                    return self.attach(png, 'image/png');
                });
        }
    },
    browserClearing() {
        return Promise.resolve()
            .then(() => browser.executeScript('window.sessionStorage.clear();'))
            .then(() => browser.executeScript('window.localStorage.clear();'))
            .then(() => browser.manage().deleteAllCookies());
    }

};
module.exports = helper;