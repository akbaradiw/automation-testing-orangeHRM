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

  it("Verify Success Search employee, filter job role, & location with valid data", () => {
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

  it("Verify Success Search employee with valid data", () => {
    DirectoryPom.searchEmployee().type("Peter");
    cy.wait(2000);
    cy.get('div[role="listbox"]').first().click();
    DirectoryPom.searchButton();
    DirectoryPom.peterImage();
  });

  it("Verify Failed Search employee with invalid data", () => {
    DirectoryPom.searchEmployee().type("Jokowi");
    cy.wait(2000);
    cy.get('div[role="listbox"]').first().click();
    DirectoryPom.searchButton();
  });

  it("Verify Success filter job role", () => {
    DirectoryPom.selectJobRole();
   DirectoryPom.selectChiefFinancialOfficer();
    DirectoryPom.searchButton();
    DirectoryPom.peterImage();

  });

  it("Verify Success filter location", () => {
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
