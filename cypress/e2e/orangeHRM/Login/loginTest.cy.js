import LoginPom from "../../../pom/Login/Login.cy.js";

describe("Login Feature", () => {
  beforeEach(() => {
    LoginPom.visitLoginPage();
    LoginPom.verifyLoginHeader();
  });

  it("Login with valid credentials", () => {
    LoginPom.inputUsername().type("Admin");
    LoginPom.inputPassword().type("admin123");
    cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts").as("shortcut");
    cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary").as("actionSummary");
    LoginPom.loginButton().should("be.visible").click();
    cy.wait(["@shortcut", "@actionSummary"]);
  });

  it("Login with invalid credentials (wrong username and wrong password)", () => {
    LoginPom.inputUsername().type("Jokow");
    LoginPom.inputPassword().type("ikn033")
    LoginPom.loginButton().click();
    LoginPom.invalidCredentials()
  });

  it("Login with invalid credentials (wrong username and valid password)", () => {
    LoginPom.inputUsername().type("Nifelheim");
    LoginPom.inputPassword().type("admin123")
    LoginPom.loginButton().click();
    LoginPom.invalidCredentials()
  });

  it("Login with invalid credentials (valid username and wrong password)", () => {
    LoginPom.inputUsername().type("Admin");
    LoginPom.inputPassword().type("usa134")
    LoginPom.loginButton().click();
    LoginPom.invalidCredentials()
  });

  it("Login with empty username & empty password", () => {
    LoginPom.loginButton().click();
  });

  it("Login with valid username & empty password", () => {
    LoginPom.inputUsername().type("Admin");
    LoginPom.loginButton().click();
  });

  it("Login with empty username & valid password", () => {
    LoginPom.inputPassword().type("admin123")
    LoginPom.loginButton().click();
  });

  it("Login with invalid username & empty password", () => {
    LoginPom.inputUsername().type("qwqqw124");
    LoginPom.loginButton().click();
  });

  it("Login with empty username & invalid password", () => {
    LoginPom.inputPassword().type("123admin")
    LoginPom.loginButton().click();
  });
});
