let inheritance = require('./../inheritance');
let Page = require('./page');
let Login = function () {
};
inheritance.inherits(Page, Login);

Login.prototype.data = {
    'login_button': {
        selector: element.all(by.xpath('.//body/descendant::a[@href="/login"]')),
        index: 0
    },
    'registered_customer': {
        selector: element.all(by.xpath('./html/body/div[3]/div[2]/div[1]/div/div[2]/div/h1')),
        index: 0
    },
    'email': {
        selector: element.all(by.id("UserName")),
        index: 0
    },
    'password': {
        selector: element.all(by.id("Password")),
        index: 0
    },
    'rememberMe': {
        selector: element.all(by.css("label[for=rememberMe]")),
        index: 0
    },
    'submit': {
        selector: element.all(by.xpath('./html/body/div[3]/div[2]/div[1]/div/div[2]/div/div[2]/form/div[5]/button')),
        index: 0
    },
    'logout': {
        selector: element.all(by.xpath('.//body/descendant::a[@href="/logout"]')),
        index: 0
    },
};

module.exports = Login;

/*
let login_button = element.all(by.xpath('.//body/descendant::a[@href="/login"]'));
let registered_customer = element.all(by.xpath('./html/body/div[3]/div[2]/div[1]/div/div[2]/div/h1'));
let email = element.all(by.id("UserName"));
let password = element.all(by.id("Password"));
let rememberMe = element.all(by.css("label[for=rememberMe]"));
let submit = element.all(by.xpath('./html/body/div[3]/div[2]/div[1]/div/div[2]/div/div[2]/form/div[5]/button'));
let logout = element.all(by.xpath('.//body/descendant::a[@href="/logout"]'));
*/



/*return Promise.resolve()
.then(() => {
    return PageFactory.getPage('home').goToPage()
})
.then(() => {
    return browser.wait(() => {
        return login_button
            .then((arr) => {
                if (arr.length > 0) {
                    login_button = arr[1]
                }
                return arr.length > 0;
            })
    }, 15000)
})
.then(function (arr) {
    return browser.wait(EC.visibilityOf(login), 30000);
})
.then(() => {
    return login.click();
}).then(() => {
    return browser.wait(() => {
        return registered_customer
            .then((arr) => {
                if (arr.length > 0) {
                    registered_customer = arr[0]
                }
                return arr.length > 0;
            })
    }, 15000)
})
.then(() => {
    return registered_customer.isDisplayed()
}).then(() => {
    return browser.wait(() => {
        return email
            .then((arr) => {
                if (arr.length > 0) {
                    email = arr[0]
                }
                return arr.length > 0;
            })
    }, 15000)
})
.then(function (arr) {
    return browser.wait(EC.visibilityOf(email), 30000);
})
.then(() => {
    return email.sendKeys('m.kulsha@aisnovations.com');
})
.then(() => {
    return browser.wait(() => {
        return password
            .then((arr) => {
                if (arr.length > 0) {
                    password = arr[0]
                }
                return arr.length > 0;
            })
    }, 15000)
})
.then(function () {
    return browser.wait(EC.visibilityOf(password), 30000);
})
.then(() => {
    return password.sendKeys('marina0708');
})
.then(() => {
    return browser.wait(() => {
        return rememberMe
            .then((arr) => {
                if (arr.length > 0) {
                    rememberMe = arr[0]
                }
                return arr.length > 0;
            })
    }, 15000)
})
.then(() => {
    return browser.wait(EC.visibilityOf(rememberMe), 30000);
})
.then(() => {
    return rememberMe.isDisplayed()
})
.then(() => {
    return rememberMe.click();
})
.then(() => {
    return rememberMe.click();
})
.then(() => {
    return browser.wait(() => {
        return submit
            .then((arr) => {
                if (arr.length > 0) {
                    submit = arr[0]
                }
                return arr.length > 0;
            })
    }, 15000)
})
.then(() => {
    return browser.wait(EC.visibilityOf(submit), 30000);
})
.then(() => {
    return submit.isDisplayed();
})
.then(() => {
    return submit.click();
})
.then(() => {
    return browser.wait(() => {
        return logout
            .then((arr) => {
                if (arr.length > 0) {
                    logout = arr[1]
                }
                return arr.length > 0;
            })
    }, 5000)
})
.then(function () {
    return browser.wait(EC.visibilityOf(logout), 30000);
})
.then(() => {
    return logout.isDisplayed()
})
.then((is) => {
    if (!is) throw new Error('non visible');
})
});

*/


