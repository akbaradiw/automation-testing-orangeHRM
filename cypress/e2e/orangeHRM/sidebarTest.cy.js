describe('Sidebar Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('h5').contains('Login').should('be.visible').and('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p"]').should('contain.text', 'Username : Admin');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts").as("shortcut");
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary").as("actionSummary");
        cy.get('[type="submit"]').click()
        cy.wait(["@shortcut", "@actionSummary"]);;
    });

    const menus = [
        'Dashboard',
        'PIM',
        'Leave',
        'Time',
        'Claim',
        'Recruitment',
        'Admin',
        'Performance',
        'Directory',
        'Maintenance',
        'My Info',
        'Buzz',
    ];

    menus.forEach((menu) => {
        it(`verify ${menu} menu in search/filter sidebar`, () => {
            cy.get('[placeholder="Search"]').type(menu);
            cy.contains(menu).should('be.visible');
        });
    });
});
