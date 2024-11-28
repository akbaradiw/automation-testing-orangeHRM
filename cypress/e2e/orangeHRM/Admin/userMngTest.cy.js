import LoginPom from "../../../pom/Login/Login.cy.js";
import UserMngPom from "../../../pom/Admin/userMng.cy.js";

describe("User Management Feature", () => {
  beforeEach(() => {
    LoginPom.visitLoginPage();
    LoginPom.verifyLoginHeader();
    LoginPom.inputUsername().type("Admin");
    LoginPom.inputPassword().type("admin123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts"
    ).as("shortcut");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");
    LoginPom.loginButton().should("be.visible").click();
    cy.wait(["@shortcut", "@actionSummary"]);
  });


  it ("verify Search User with valid data", () => {
    UserMngPom.clickAdminMenu();
    UserMngPom.closeSidebar();
    UserMngPom.searchUsername().should("be.visible").type("Admin");
    UserMngPom.searchButton()
    UserMngPom.recordFound()
});


it ("verify Search User with invalid data", () => {
  UserMngPom.clickAdminMenu();
  UserMngPom.closeSidebar();
  UserMngPom.searchUsername().should("be.visible").type("kadir");
  UserMngPom.searchButton()
  UserMngPom.recordNotFound()
});

  it("verify Delete User", () => {
    UserMngPom.clickAdminMenu();
    UserMngPom.deleteUser()
      .get('[class="oxd-icon bi-trash oxd-button-icon"]')
      .click();
  });

  it("verify Cancel Delete User", () => {
    UserMngPom.clickAdminMenu();
    UserMngPom.deleteUser()
      .get(
        '[class="oxd-button oxd-button--medium oxd-button--ghost orangehrm-button-margin"]'
      )
      .click();
  });

  it("verify Delete All User", () => {
    UserMngPom.clickAdminMenu();
    UserMngPom.deleteAllUser().get('[class="oxd-icon bi-trash oxd-button-icon"]')
    .click();
  });
});
