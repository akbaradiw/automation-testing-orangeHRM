describe('Login Feature', () => {
    it('Login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });


    it('Login with invalid credentials (wrong username and wrong password)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="username"]').type('Jokow')
        cy.get('[name="password"]').type('ikn033')
        cy.get('[type="submit"]').click( )
        cy.get("p").contains("Invalid credentials").should("exist");
    })


    it('Login with invalid credentials (wrong username and valid password)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="username"]').type('Nifelheim')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click( )
        cy.get("p").contains("Invalid credentials").should("exist");

    })

    it('Login with invalid credentials (valid username and wrong password)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('usa134')
        cy.get('[type="submit"]').click( )
        cy.get("p").contains("Invalid credentials").should("exist");

    })

    it('Login with empty username & empty password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[type="submit"]').click( )

    })

    it('Login with valid username & empty password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="username"]').type('Admin')
        cy.get('[type="submit"]').click( )

    })

    it('Login with empty username & valid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click( )

    })

    it('Login with invalid username & empty password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="password"]').type('jokow401')
        cy.get('[type="submit"]').click( )

    })

    it('Login with empty username & invalid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').contains("Username : Admin")
        cy.get('[name="password"]').type('123admin')
        cy.get('[type="submit"]').click( )

    })
    
})
    

