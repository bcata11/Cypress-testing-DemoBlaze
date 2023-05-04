import { faker } from '@faker-js/faker'

describe('Create an account and log in', () => {

  it('succesfully create an account and log in', () => {
    cy.visit('https://www.demoblaze.com/').wait(1000)
    cy.get('#signin2').click().wait(2000)
    //create new username and password every time we run the test
    const username = faker.name.fullName();
    const password = faker.internet.password();

    cy.get('#sign-username').type(username)
    cy.get('#sign-password').type(password)

    cy.get('button[onclick="register()"].btn.btn-primary').click()
    //login with the new account
    cy.wait(1000)
    cy.get('#login2').click()
    cy.wait(2000)

    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('button[onclick="logIn()"].btn.btn-primary').click()

    cy.get('#nameofuser')
  })
})