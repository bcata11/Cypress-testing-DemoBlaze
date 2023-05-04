describe('Test that an user can successfully add a product(of your choice) from Laptops category and place an order', () => {
  it('adds the product and makes a purchase', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.contains('Laptops').click()
    cy.wait(2000)
    //select the product
    cy.contains('i7').click()
    cy.contains('Add to cart').click()
    //co to the cart page
    cy.contains('Cart').click()
    cy.contains('Place Order').click()
    cy.wait(1000);

    //fill the checkout form
    cy.get('#name').type('test')
    cy.get('#country').type('Ro')
    cy.get('#city').type('Cr')
    cy.get('#card').type('123456789')
    cy.get('#month').type('05')
    cy.get('#year').type('2023')
    cy.wait(1000);
    cy.contains('Purchase').click()
    cy.wait(1000);
    //check if the purchase is complete
    cy.contains('Thank you')

  })
})