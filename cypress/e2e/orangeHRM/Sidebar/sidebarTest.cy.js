import LoginPom from "../../../pom/Login/Login.cy.js";

describe('Sidebar Test', () => {
    beforeEach(() => {
        LoginPom.visitLoginPage();
        LoginPom.verifyLoginHeader();
        LoginPom.inputUsername().type("Admin");
        LoginPom.inputPassword().type("admin123");
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts").as("shortcut");
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary").as("actionSummary");
        LoginPom.loginButton().should("be.visible").click();
        cy.wait(["@shortcut", "@actionSummary"]);
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
