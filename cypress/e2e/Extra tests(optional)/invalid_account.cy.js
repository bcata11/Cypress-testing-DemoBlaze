describe('Login with invalid account', () => {
    it('shouldnt login with invalid account', () => {
      cy.visit('https://www.demoblaze.com/').wait(1000)
  
      cy.get('#login2').click().wait(2000)
      cy.get('#loginusername').type('Stefan cel MAre')
      cy.get('#loginpassword').type('password')
      cy.get('button[onclick="logIn()"].btn.btn-primary').click()
  
      cy.on('window:alert', (text) => {
        expect(text).to.equal('User does not exist.');
      });
    })
  })
  