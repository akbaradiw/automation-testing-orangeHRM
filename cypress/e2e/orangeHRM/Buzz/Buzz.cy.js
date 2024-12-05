import LoginPom from "../../../pom/Login/Login.cy.js";
import BuzzPom from "../../../pom/Buzz/Buzz.cy.js";

describe("Buzz Feature", () => {
  beforeEach(() => {
    LoginPom.visitLoginPage();
    // LoginPom.verifyLoginHeader();
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
    BuzzPom.clickBuzz();
  });

  it("Verify Success post", () => {
    BuzzPom.postInput().type("hello world");
    // cy.wait(1000);
    BuzzPom.postButton();
    BuzzPom.postSuccess();
  });

  it("Verify Success edit post", () => {
    BuzzPom.editButton();
    BuzzPom.InputEditPost();
    BuzzPom.editPostButton();
    BuzzPom.editPostSuccess();
    
  });

  it("Verify Success delete post", () => {
    BuzzPom.deletePost();
  });
});
