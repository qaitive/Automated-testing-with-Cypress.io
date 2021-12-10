import { login } from './pom/login'

Cypress.Commands.add('login', ({email, password}) => {
    cy.get(login.username).type(email, {force: true})
    cy.get(login.password).type(password, {force: true})
    cy.get(login.loginBtn).click({force: true})
})
