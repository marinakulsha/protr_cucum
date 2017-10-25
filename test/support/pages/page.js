let Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype.data = {};
Page.prototype.clickButton = function(name) {
    let elArray = this.data[name].selector;
    let index = this.data[name].index;
    let EC = protractor.ExpectedConditions;
    let elem;
    return Promise.resolve()
        .then(() => {
            return browser.wait(() => {
                return elArray
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

Page.prototype.inputValue = function(name, text) {
    let elArray = this.data[name].selector;
    let index= this.data[name].index;
    let EC = protractor.ExpectedConditions;
    let elem;
    return Promise.resolve()
        .then(() => {
           return browser.wait(() => {
               return elArray
                    .then((arr) => {
                      if (arr.length > 0) {
                            elem = arr[index]
                        }
                        return arr.length > 0;
                    })
            }, 5000)
        })
        .then(() => {
           browser.wait(function () {
                return elem.isDisplayed();
            }, 20000);
        })
        .then(() => {
            return elem.clear()
        })
       .then(() => {
            return elem.sendKeys(text)
        });
};

Page.prototype.pressButton = function(name) {
    let elArray = this.data[name].selector;
    let index= this.data[name].index;
    let EC = protractor.ExpectedConditions;
    let elem;
    return Promise.resolve()
        .then(() => {
            return browser.wait(() => {
                return elArray
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
            return elem.sendKeys(protractor.Key[name])
        })

};
Page.prototype.elementVisibility = function(name) {
    let elArray = this.data[name].selector;
    let index= this.data[name].index;
    let elText = this.data[name].elText;
    let elem;
    return Promise.resolve()
        .then(() => {
            return browser.wait(() => {
                return elArray
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
        }).then((text) =>{
            return {
                actualText: text,
                expectedText: elText
            };
        })
       /* .catch((err) => {
            console.log(err);
            return browser.sleep(100)
                .then(() => {
                    return {
                        actualText: elem.getText(),
                        expectedText: elText
                    };
                })
        })*/

 }


module.exports = Page;