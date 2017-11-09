let inheritance = require('./../inheritance');
let Page = require('./page');
let Home = function () {
};
inheritance.inherits(Page, Home);
Home.prototype.url = 'http://foodbank.d5.aisnovations.com/'

Home.prototype.data = {
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

    'delete': {
        selector: element.all(by.xpath('.//*[@id="cart-item-1131"]/td[5]/a')),
        index: 0
    },
    'ENTER': {
        selector: element.all(by.xpath('/descendant::input[@name="query"]')),
        index: 1
    },
    'search_name': {
        selector: element.all(by.xpath('/descendant::input[@name="query"]')),
        index: 1
    },
    'qty_field': {
        selector: element.all(by.xpath('/html/body/div[1]/div/div[3]/div[2]/div[1]/div[1]/div[2]/div[2]/div/div/input')),
        index: 0
    },
    'logo': {
        selector: element.all(by.xpath('.//body/descendant::a[@href="/"]')),
        index: 2
    },
    'Products: Aceon': {
        selector: element.all(by.xpath("/html/body/div[3]/div[2]/div[1]/div[1]/div[1]")),
        elText: 'Products: Aceon',
        index: 0
    },

    'product_title': {
        selector: element.all(by.xpath('/html/body/div[1]/div/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div/h2')),
        elText: 'amphetamine',
        index: 0
    },
    'cart': {
        selector: element.all(by.xpath('.//*[@id="cart-micro"]/a/span[3]')),
        elText: 'Cart',
        index: 1
    },
    'cart_item': {
        selector: element.all(by.xpath('.//*[@id="cart-item-1131"]/td[2]/div[3]')),
        elText: '3956',
        index: 0
    },
    '$0.00': {
        selector: element.all(by.id('cart-estimations-grand-total')),
        elText: '$0.00',
        index: 0
    }
};


module.exports = Home;