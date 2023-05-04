// user add multiple products and remove them

describe('Test that an user can successfully add multiple products from different categories and that he can successfully remove some of them from the cart before submitting the order', () => {
  it('adds the product and makes a purchase', () => {
    cy.visit('https://www.demoblaze.com/')

    //add the first product
    cy.wait(2000)
    cy.contains('s6').click()
    cy.wait(2000)
    cy.contains('Add to cart').click()
    cy.wait(3000)

    //add the second product
    cy.contains('Home').click();
    cy.wait(2000)
    cy.contains('1520').click()
    cy.wait(2000)
    cy.contains('Add to cart').click()
    cy.wait(3000)

    //got to cart page and delete one item
    cy.contains('Cart').click();
    cy.wait(2000)
    cy.contains('Delete').click()
    cy.wait(2000)

    //if we still find an Delete button after we deleted one item, it means we still have items in the cart
    cy.contains('Delete')
  })
})
