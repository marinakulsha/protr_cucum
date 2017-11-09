@test
Feature: As a login User I should see elements and put the product into the cart

  @login
  Scenario: Go to site and see logo element on page
    When I go to 'home' page
    Then I should see 'logo' element on page
    When I click 'login' element
    Then I should see 'registered_customer' element on page
    When I input into 'email' field the value 'm.kulsha@aisnovations.com'
    When I input into 'password' field the value 'marina0708'
    When I click 'rememberMe' element
    When I click 'rememberMe' element
    When I click 'submit' element
    Then I should see 'logout' element on page

  @link
  Scenario: See products of Aceon category

    When I click 'Aceon' element
    Then I should see 'Products: Aceon' element on page

  @cart
  Scenario: Put the product into the cart
   When I input into 'search_name' field the value 'amphetamine'
   When I press 'ENTER' button
   Then I should see 'product' element on page
   When I click 'product' element
   Then I should see 'product_title' element on page
   When I input into 'qty_field' field the value '03'
   When I click 'add' element
   Then I should see 'cart' element on page
   When I click 'cart' element
   Then I should see 'cart_item' element on page
   When I click 'delete' element
   Then I should see '$0.00' element on page


