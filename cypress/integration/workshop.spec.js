const user = Cypress.env('user')
const agent = Cypress.env('agent')

describe('Test suite', () => {

    /*cy.beforeEach('Visit application and login', () => {
        cy.visit('')
        cy.login(user)
    })*/
    it('Search for Hotels', () => {
        cy.visit('')
        cy.intercept('GET', 'https://ipwhois.app/json/').as('ipwhois')
        cy.login(user)
        cy.get('nav > :nth-child(1) > :nth-child(2) > .waves-effect').click()
        cy.get('#select2-hotels_city-container').click({force: true})
        cy.get('.select2-search__field').type('Dubai', {force: true}).then( () => {
            cy.wait(2000)
            cy.get('.select2-results__option').contains('Dubai,United Arab Emirates').click()
        })
        cy.get('#submit').click({force: true})
        cy.wait('@ipwhois')
        cy.get('.sec__title_list').should('have.text', 'Search Hotels in dubai')
    })
    
    it('Flights', () => {
        cy.visit('')
        cy.login(user)
        cy.get('nav > :nth-child(1) > :nth-child(3) > .waves-effect').click()
    })
})