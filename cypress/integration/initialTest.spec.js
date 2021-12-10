const user = Cypress.env('user')
const agent = Cypress.env('agent')

describe("Initial Test suite", () => {

    it("Initial User test case", () => {
        cy.visit('')
        cy.login(user)
        cy.get('.breadcrumb-content > .section-heading > .sec__title')
          .contains('Hi, Demo Welcome Back')
    })

    it("Initial Agent test case", () => {
        cy.visit('')
        cy.login(agent)
        cy.get('.breadcrumb-content > .section-heading > .sec__title')
          .contains('Hi, Demo Welcome Back')
    })
})