let Page = function () {
};

Page.prototype._root = element(by.css('body'));

Page.prototype.data = {};
Page.prototype.url = '';

Page.prototype.goToPage = function(){
    return Promise.resolve()
        .then(() => {
            return browser.get(this.url)
        })

}

Page.prototype.waitReady = function (name) {
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
            return elem
        });
};


Page.prototype.clickButton = function (name) {

    return this.waitReady(name)
        .then((elem) => {
            return elem.click();
        })

};

Page.prototype.inputValue = function (name, text) {
    let  input;
    return this.waitReady(name)
        .then((elem) => {
            input = elem;
            return input.clear()
        })
        .then(() => {
            return input.sendKeys(text)
        });
};

Page.prototype.pressButton = function (name) {
    return this.waitReady(name)
        .then((elem) => {
            return elem.sendKeys(protractor.Key[name])
        })

};
Page.prototype.elementVisibility = function (name) {
   let elText = this.data[name].elText;
    return this.waitReady(name)
        .then(function (elem) {
            if (elText) {
                return elem.getText();
            }
        }).then((text) => {
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