// Test that an user can successfully send a message to Contact

describe('Test that an user can successfully send a message to Contact', () => {
  it('succesfully sends message', () => {
    cy.visit('https://www.demoblaze.com/')

    cy.wait(4000)
    //find the contact button
    cy.get('[data-target="#exampleModal"]')
      .click()
    cy.wait(3000)
    //get some inputs
    cy.get('#recipient-email').type('test@gmail.com')
    cy.get('#recipient-name').type('Xulescu')
    cy.get('#message-text').type('Salut')
    cy.wait(500)

    cy.contains('Send message').click()
    cy.wait(2000)
    //check if the succesfull alert is thrown
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Thanks for the message!!');
    });
  })
 })