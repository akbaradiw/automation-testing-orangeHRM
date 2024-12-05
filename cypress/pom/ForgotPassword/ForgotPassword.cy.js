export default class ForgotPasswordPom {
    static clickForgotPassword() {
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click();
    }

    static inputUsername() {
        return cy.get('[placeholder="Username"]');
    }

    static ButtonResetPassword() {
        return cy.get('[type="submit"]')
    }

    static CardResetSuccess() {
        return cy.get('[class="orangehrm-card-container"]').should("be.visible");
}

static ErrorMessage() {
    return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should("be.visible");
}
}