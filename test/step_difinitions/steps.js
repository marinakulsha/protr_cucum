let { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {

    When(/^I click '(.+)' element$/, function (name) {
        let items = {
            'Aceon': {
                selector: element.all(by.xpath('.//body/descendant::a[@href="/products?category=Aceon"]')),
                index: 1
            },
            'product': {
                selector: element.all(by.xpath('.//body/descendant::a[@href="/product?id=1131"]')),
                index: 0
            },
            'add': {
                selector: element.all(by.css('button.btn:nth-child(2)')),
                index: 0
            },
            'cart': {
                selector: element.all(by.xpath('.//body/descendant::a[@href="/cart"]')),
                index: 1
            }
        };
        let el = items[name].selector;
        let elem;
        let EC = protractor.ExpectedConditions;
        return Promise.resolve()
            .then(() => {
                return browser.wait(() => {
                    return el
                        .then((arr) => {
                            if (arr.length > 0) {
                                elem = arr[items[name].index]
                            }
                            return arr.length > 0;
                        })
                }, 5000)
            })
            .then(function () {
                return browser.wait(EC.visibilityOf(elem), 30000);
            })
            .then(() => {
                return elem.isDisplayed();
            })
            .then(() => {
                return elem.click();
            })
    });

    When(/^I press '(.+)' button$/, function (button) {
        let EC = protractor.ExpectedConditions;
        let search_name = element.all(by.xpath('/descendant::input[@name="query"]'));

        return Promise.resolve()
            .then(() => {
                return browser.wait(() => {
                    return search_name
                        .then((arr) => {
                            if (arr.length > 0) {
                                el = arr[1]
                            }
                            return arr.length > 0;
                        })
                }, 15000)
            })
            .then(function (arr) {
                return browser.wait(EC.visibilityOf(el), 30000);
            })


            .then(() => {
                return el.isDisplayed();
            })

            .then(() => {
                return el.sendKeys(protractor.Key[button])
            })
    });




    When(/^I input into '(.+)' field the value '(.+)'$/, function (name, title) {
        let values = {
            'search_name': {
                selector: element.all(by.xpath('/descendant::input[@name="query"]')),
                value: 'amphetamine',
                index: 1
            },
            'qty_field': {
                selector: element.all(by.css('.product-qty-input')),
                value: '3',
                index: 0
            }
        };
        let el = values[name].selector;
        let elem;

        return Promise.resolve()
            .then(() => {

                return browser.wait(() => {

                    return el
                        .then((arr) => {

                            if (arr.length > 0) {
                                elem = arr[values[name].index]
                            }
                            return arr.length > 0;
                        })
                }, 5000)
            })
            .then(() => {

                browser.wait(function () {
                    return elem.isDisplayed();
                }, 30000);
            })
            .then(() => {
                return elem.clear()
            })

            .then(() => {
                return elem.sendKeys(title)
            });

    });

    Then(/^I should see '(.+)' element on page$/, function (name) {

        let data = {

            'logo': {
                selector: element.all(by.xpath('.//body/descendant::a[@href="/"]')),
                index: 2
            },
            'Products: Aceon': {
                selector: element.all(by.xpath("/html/body/div[3]/div[2]/div[1]/div[1]/div[1]")),
                //elText: 'Products: Aceon',
                index: 0
            },
            'product': {
                selector: element.all(by.xpath('.//body/descendant::a[@href="/product?id=1131"]')),
                index: 0
            },
            'product_title': {
                selector: element.all(by.xpath('/html/body/div[1]/div/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div/h2')),
                //elText: 'amphetamine',
                index: 0
            },
            'cart': {
                selector: element.all(by.xpath('.//body/descendant::a[@href="/cart"]')),
                //  elText: 'Cart',
                index: 1
            },
            'cart_item': {
                selector: element.all(by.xpath('//body/descendant::a[@href="/product?id=1131"]')),
                // elText: 'amphetamine',
                index: 1
            }
        };

        let el = data[name].selector;
        let elem;
        return Promise.resolve()
            .then(() => {

                return browser.wait(() => {

                    return el
                        .then((arr) => {

                            if (arr.length > 0) {
                                elem = arr[data[name].index]
                            }
                            return arr.length > 0;
                        })
                }, 5000)
            })
            .then(() => {

                browser.wait(function () {

                    return elem.isDisplayed();
                }, 30000);
            })

            .then(function () {
                if (data[name].elText) {
                    return data[name].selector.getText();
                }
            })
            .then((text) => {
                if (text) {
                    expect(text).to.equal(data[name].elText);
                }
            });
    });
});


