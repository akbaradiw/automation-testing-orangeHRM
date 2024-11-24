describe('Sidebar Test', () => {
    it('verify Dashbord menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('Dashboard');
    });

    it ('verify PIM menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('PIM');
    });

    it ('verify Leave menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('Leave');
    });

    it ('verify Time menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('Time');
    });

    it ('verify Claim menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('Claim');
    });

    it ('verify Recruitment menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('Recruitment');
    });

    it ('verify Admin menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   

        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('Admin');
    });

    it ('verify Performance menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('Performance');
    });


    it ('verify Directory menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('Directory');
    });

    it ('verify Maintenance menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('Maintenance');
    });

    it ('verify My Info menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('My Info');
    });

    it ('verify Buzz menu in search/filter sidebar ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');   
        cy.get("h5").contains("Login").should("be.visible").and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').should('be.visible').type('Admin');
        cy.get('[name="password"]').should('be.visible').type('admin123');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.get('[placeholder="Search"]').type('Buzz');
    });




});

    