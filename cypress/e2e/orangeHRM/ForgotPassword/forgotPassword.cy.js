import LoginPom from "../../../pom/Login/Login.cy.js";
import ForgotPasswordPom from "../../../pom/ForgotPassword/ForgotPassword.cy.js";

describe("Forgot Password Featture", () => {
    beforeEach(() => {
      LoginPom.visitLoginPage();
      LoginPom.verifyLoginHeader();
      ForgotPasswordPom.clickForgotPassword();
    });

  it ('Verify Success input username to reset password', () => {
    ForgotPasswordPom.inputUsername().type("Admin");
    ForgotPasswordPom.ButtonResetPassword().click();
    ForgotPasswordPom.CardResetSuccess().should("be.visible");
  });  

  it ('Verify failed Input invalid username to reset password', () => {
    ForgotPasswordPom.inputUsername().type("Jokowi");
    ForgotPasswordPom.ButtonResetPassword().click();
    ForgotPasswordPom.ErrorMessage().should("be.visible");
  }); 
  
  it ('Verify failed Empty username to reset password', () => {
    ForgotPasswordPom.ButtonResetPassword().click();
    ForgotPasswordPom.ErrorMessage().should("be.visible");
  });  

});