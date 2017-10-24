let Page = function(){};

Page.prototype._root = element(by.css('body'));


Page.prototype.clickButton = function(el, index) {

    let EC = protractor.ExpectedConditions;
    let elem;
    return Promise.resolve()
        .then(() => {
            return browser.wait(() => {
                return el
                    .then((arr) => {
                        if (arr.length > 0) {
                            elem = arr[index]
                        }
                        return arr.length > 0;
                    })
            }, 25000)
        })
        .then(function () {
            return browser.wait(EC.visibilityOf(elem), 50000);
        })
        .then(() => {
            return elem.isDisplayed();
        })
        .then(() => {
            return elem.click();
        })

};

Page.prototype.inputValue = function(el, index, text) {

    let EC = protractor.ExpectedConditions;
    let element;
    return Promise.resolve()
        .then(() => {
           return browser.wait(() => {
               return el
                    .then((arr) => {
                      if (arr.length > 0) {
                            element = arr[index]
                        }
                        return arr.length > 0;
                    })
            }, 5000)
        })
        .then(() => {
           browser.wait(function () {
                return element.isDisplayed();
            }, 20000);
        })
        .then(() => {
            return element.clear()
        })
       .then(() => {
            return element.sendKeys(text)
        });
};

Page.prototype.pressButton = function(el, index, button) {
    let EC = protractor.ExpectedConditions;
    let elem;
    return Promise.resolve()
        .then(() => {
            return browser.wait(() => {
                return el
                    .then((arr) => {
                        if (arr.length > 0) {
                            elem = arr[index]
                        }
                        return arr.length > 0;
                    })
            }, 15000)
        })
        .then(function (arr) {
            return browser.wait(EC.visibilityOf(elem), 50000);
        })
       .then(() => {
            return elem.isDisplayed();
        })

        .then(() => {
            return elem.sendKeys(protractor.Key[button])
        })

};
Page.prototype.elementVisibility = function(el, index, elText) {
    let elem;
    return Promise.resolve()
        .then(() => {

            return browser.wait(() => {
                console.log('ggggggg')
                return el

                    .then((arr) => {
                        if (arr.length > 0) {
                            elem = arr[index]
                        }
                        return arr.length > 0;
                    })
            }, 25000)
        })
        .then(() => {
            browser.wait(function () {
                return elem.isDisplayed();
            }, 50000);
        })
        .then(function () {
            if (elText) {
                return elem.getText();
            }
        })
        .then((text) => {
            if (text) {
                expect(text).to.equal(elText);
            }
        });

}

module.exports = Page;