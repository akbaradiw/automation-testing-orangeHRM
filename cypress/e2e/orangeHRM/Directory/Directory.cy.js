import LoginPom from "../../../pom/Login/Login.cy.js";
import DirectoryPom from "../../../pom/Directory/Directory.cy.js";

describe("Directory Feature", () => {
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
    DirectoryPom.clickDirectory();
    DirectoryPom.closeSidebar();
  });

  it("User Search/Filter with valid employee name, job title, and location.", () => {
    DirectoryPom.searchEmployee().type("Peter");
    cy.wait(2000);
    cy.get('div[role="listbox"]').first().click();
    DirectoryPom.selectJobRole();
    DirectoryPom.selectChiefFinancialOfficer()
    DirectoryPom.selectLocation();
    DirectoryPom.selectNewYork();
    cy.wait(1000);
    DirectoryPom.searchButton();
    DirectoryPom.peterImage();
  });

  it("User Verify Success Search/Filter with valid employee name", () => {
    DirectoryPom.searchEmployee().type("Peter");
    cy.wait(2000);
    cy.get('div[role="listbox"]').first().click();
    DirectoryPom.searchButton();
    DirectoryPom.peterImage();
  });

  it("User Verify Failed Search employee with invalid data", () => {
    DirectoryPom.searchEmployee().type("Jokowi");
    cy.wait(2000);
    cy.get('div[role="listbox"]').first().click();
    DirectoryPom.searchButton();
  });

  it("User Verify Success Search/Filter with valid job title", () => {
    DirectoryPom.selectJobRole();
   DirectoryPom.selectChiefFinancialOfficer();
    DirectoryPom.searchButton();
    DirectoryPom.peterImage();

  });

  it("User Verify Success Search/Filter with valid location", () => {
    DirectoryPom.selectLocation();
    DirectoryPom.selectNewYork();
    DirectoryPom.searchButton();
    cy.get(
      '[class="oxd-text oxd-text--p orangehrm-directory-card-description --break-words"]'
    ).should("be.visible");
    DirectoryPom.peterImage();
    DirectoryPom.saniaImage();
  });
});
