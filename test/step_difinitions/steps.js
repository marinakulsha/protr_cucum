let {defineSupportCode} = require('cucumber');
let PageFactory = require('./../support/pages/PageFactory');

defineSupportCode(function ({Given, When, Then }) {

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
            },
            'delete':{
                selector: element.all(by.xpath('.//*[@id="cart-item-1131"]/td[5]/a')),
                index:0
            }
        };
        let el = items[name].selector;
        let index= items[name].index;
        return new PageFactory().getPage('home').clickButton(el,index)
    });

    When(/^I press '(.+)' button$/, function (button) {

        let press = {
            'ENTER': {
                selector: element.all(by.xpath('/descendant::input[@name="query"]')),
                index: 1
            }
        };
        let el = press[button].selector;
        let index= press[button].index;
        return new PageFactory().getPage('home').pressButton(el,index, button)
   });

    When(/^I input into '(.+)' field the value '(.+)'$/, function (name, title) {
        let values = {
            'search_name': {
                selector: element.all(by.xpath('/descendant::input[@name="query"]')),
                index: 1
            },
            'qty_field': {
                selector: element.all(by.css('.product-qty-input')),
                index: 0
            }
        };
        let el = values[name].selector;
        let index = values[name].index;
        return new PageFactory().getPage('home').inputValue(el,index,title)
   });

    Then(/^I should see '(.+)' element on page$/, function (name) {
       let data = {
          'logo': {
                selector: element.all(by.xpath('.//body/descendant::a[@href="/"]')),
                index: 2
            },
            'Products: Aceon': {
                selector: element.all(by.xpath("/html/body/div[3]/div[2]/div[1]/div[1]/div[1]")),
                elText: 'Products: Aceon',
                index: 0
            },
            'product': {
                selector: element.all(by.xpath('.//body/descendant::a[@href="/product?id=1131"]')),
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
                index: 0
            },
            'cart_item': {
                selector: element.all(by.xpath('.//*[@id="cart-item-1131"]/td[2]/div[3]')),
                elText:'#amph',
                index: 0
            },
           '$0.00':{
               selector: element.all(by.id('cart-estimations-grand-total')),
               elText: '$0.00',
               index:0
           }
        };
        let el = data[name].selector;
        let index = data[name].index;
        let elText = data[name].elText;
        return new PageFactory().getPage('home').elementVisibility(el,index,elText)
    });
});


