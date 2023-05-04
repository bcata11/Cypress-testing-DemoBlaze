
describe('Test that an user can successfully navigate among the application pages', () => {

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/')
  })

  it('renders home', () => {
    cy.wait(1000)
    cy.contains('Home').click();
    cy.url().should('include', 'index.html')
  })

  it('renders contact', () => {
    cy.wait(4000)
    //find the contact button
    cy.get('[data-target="#exampleModal"]')
      .click()
    cy.wait(2000)
    cy.get('button.close[data-dismiss="modal"][aria-label="Close"]:first')
      .click()
  })

  it('renders about', () => {
    cy.wait(2000)
    //find the about button
    cy.get('[data-target="#videoModal"]')
      .click()
    cy.wait(2000)
    cy.get('button.btn.btn-secondary[data-dismiss="modal"]').eq(3).click()
  })

  it('renders cart', () => {
    cy.wait(1000)
    cy.contains('Cart').click();
    cy.url().should('include', 'cart.html')
  })

  it('renders log in', () => {
    cy.wait(2000)
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('button.btn.btn-secondary[data-dismiss="modal"]').eq(2).click()
  })

  it('renders sign up', () => {
    cy.wait(2000)
    cy.get('#signin2').click()
    cy.wait(2000)
    cy.get('button.btn.btn-secondary[data-dismiss="modal"]').eq(1).click()
  })

  it('switch between pages', () => {
    cy.wait(1000)
    cy.contains('Phones').click()
    cy.wait(1000)
    cy.contains('s6').click()
    cy.wait(2000)
    cy.contains('Add to cart').click()
    cy.wait(1000)
    cy.contains('Cart').click()
    cy.wait(2000)
    cy.contains('Home').click()
    cy.wait(2000)
    cy.contains('Laptops').click()
    cy.wait(2000)
    cy.contains('i7').click()
    cy.wait(2000)
    cy.contains('Add to cart').click()
    cy.wait(2000)
    cy.contains('Cart').click()
    cy.wait(2000)
    cy.contains('Home').click()
    cy.wait(1000)
    cy.get('#next2').click()
    cy.wait(1000)
    cy.get('#prev2').click()
  })


})