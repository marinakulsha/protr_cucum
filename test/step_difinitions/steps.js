let {defineSupportCode} = require('cucumber');
let PageFactory = require('./../support/pages/PageFactory');

defineSupportCode(function ({Given, When, Then}) {

    When(/^I click '(.+)' element$/, function (name) {
        return PageFactory.getInstance().getPage('home').clickButton(name)
    });

    When(/^I press '(.+)' button$/, function (name) {

        return PageFactory.getInstance().getPage('home').pressButton(name)
    });

    When(/^I input into '(.+)' field the value '(.+)'$/, function (name, title) {

        return PageFactory.getInstance().getPage('home').inputValue(name, title)
    });


    Then(/^I should see '(.+)' element on page$/, function (name) {

        return PageFactory.getInstance().getPage('home').elementVisibility(name)
            .then(
                (result) => {
                    if (result) {
                        expect(result.actualText).to.equal(result.expectedText);
                    }
                });
    })

})
