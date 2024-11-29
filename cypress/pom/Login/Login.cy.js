export default class LoginPom {
  static visitLoginPage() {
    return cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  static verifyLoginHeader() {
    return cy
      .get("h5")
      .contains("Login")
      .should("be.visible")
      .and("have.text", "Login");
  }
  static inputUsername() {
    return cy.get('[name="username"]');
  }

  static inputPassword() {
    return cy.get('[name="password"]');
  }

  static loginButton() {
    return cy.get('[type="submit"]');
  }

  static invalidCredentials() {
    return cy.get("p").contains("Invalid credentials").should("exist");
  }

  static requiredField() {
    return cy.get  ('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should("be.visible");

  }
}
