describe('OrangeHRM', () => {
    it('Login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click( )
    })
    it('Buzz', () => {
        cy.get('oxd-main-menu-item').contains('Buzz').click( )
        cy.get('#menu_buzz_viewBuzz').should('be.visible')
    })
})
