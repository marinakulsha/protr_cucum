let {defineSupportCode} = require('cucumber');
let PageFactory = require('./../support/pages/PageFactory').getInstance().getPage('home');

defineSupportCode(function ({Given, When, Then}) {

    When(/^I click '(.+)' element$/, function (name) {
        return PageFactory.clickButton(name)
    });

    When(/^I press '(.+)' button$/, function (name) {

        return PageFactory.pressButton(name)
    });

    When(/^I input into '(.+)' field the value '(.+)'$/, function (name, title) {

        return PageFactory.inputValue(name, title)
    });


    Then(/^I should see '(.+)' element on page$/, function (name) {

        return PageFactory.elementVisibility(name)
            .then(
                (result) => {
                    if (result) {
                        expect(result.actualText).to.equal(result.expectedText);
                    }
                });
    })

})
