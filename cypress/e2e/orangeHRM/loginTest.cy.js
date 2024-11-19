describe('OrangeHRM', () => {
    it('Login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
     // cy.get("h5").contains("Login").should("be.visible")
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click( )
    })

    it('Login with invalid credentials (wrong username and password)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
  // cy.get("h5").contains("Login").should("be.visible")
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="username"]').type('Digimon')
        cy.get('[name="password"]').type('digimon12345')
        cy.get('[type="submit"]').click( )
    })


    it('Login with invalid credentials (wrong username and valid password)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    // cy.get("h5").contains("Login").should("be.visible")
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="username"]').type('Digimon')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click( )
    })

    it('Login with invalid credentials (valid username and wrong password)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
 // cy.get("h5").contains("Login").should("be.visible")
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('digimon12345')
        cy.get('[type="submit"]').click( )
    })

    it('Login with empty username & password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
 // cy.get("h5").contains("Login").should("be.visible")
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[type="submit"]').click( )
    })

    it('Login with valid username & empty password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
       // cy.get("h5").contains("Login").should("be.visible")
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="username"]').type('Admin')
        cy.get('[type="submit"]').click( )
    })

    it('Login with empty username & valid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
      // cy.get("h5").contains("Login").should("be.visible")
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click( )
    })

    it('Login with invalid username & empty password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
      // cy.get("h5").contains("Login").should("be.visible")
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="password"]').type('jokow401')
        cy.get('[type="submit"]').click( )
    })

    it('Login with empty username & invalid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
      // cy.get("h5").contains("Login").should("be.visible")
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]')
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="password"]').type('123admin')
        cy.get('[type="submit"]').click( )
    })
    
})
    

