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


  it("Verify Search/filter Employee with valid data", () => {
    DirectoryPom.searchEmployee().type("Peter Mac Anderson");
    DirectoryPom.selectJobRole();
    DirectoryPom.selectChiefFinancialOfficer();
    DirectoryPom.selectLocation();
    DirectoryPom.selectNewYork();
    DirectoryPom.searchButton();
  });

  it("Verify Reset Search/filter Employee Input Form", () => {
    DirectoryPom.searchEmployee().type("Peter Mac Anderson");
    DirectoryPom.selectJobRole();
    DirectoryPom.selectChiefFinancialOfficer();
    DirectoryPom.selectLocation();
    DirectoryPom.selectNewYork();
    DirectoryPom.resetButton();
  });
});
