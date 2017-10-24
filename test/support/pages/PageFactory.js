let Home = require('./Home'),
    Checkout = require('./Checkout'),
    Blog = require('./Blog'),
    MyAccount = require('./MyAccount');


let PageFactory = function () {

    let _this = this;

    _this.currentPage = null;

    _this.getPage = function (page) {
        page = page.toLowerCase()

        let pages = {
            'home': Home,
            'checkout': Checkout,
            'blog': Blog,
            'myaccount': MyAccount

        };
        if (!pages[page]) {
            throw new Error('Wrong page name: ' + page);
        }
        _this.currentPage = new pages[page]();
        return _this.currentPage;
    };
};

module.exports = PageFactory;

