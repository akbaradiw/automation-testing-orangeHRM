export default class UserMngPom {
  static clickAdminMenu() {
    return cy.get('[href="/web/index.php/admin/viewAdminModule"]').click();
  }
  static addUser() {
    return cy.get('[class="oxd-icon bi-plus oxd-button-icon"]').click();
  }

  static closeSidebar() {
    return cy.get('[class="oxd-icon-button oxd-main-menu-button"]').click();
  }

  static searchUsername() {
    return cy.get('[class="oxd-input oxd-input--active"]');
  }

  static searchEmployee() {
    return cy.get('[placeholder="Type for hints..."]')
  }

  static selectUseRole() {
    return cy.get('.oxd-select-text').first().click().get('.oxd-select-dropdown').contains(role).click
  }
  

  static searchButton() {
    return cy.get('[type="submit"]').click();
  }

  static recordFound() {
    return cy.get('[class="oxd-text oxd-text--span"]')
    .contains("(1) Record Found")
    .should("be.visible");
  }

  static recordNotFound() {
    return cy.get('[class="oxd-text oxd-text--span"]')
    .contains("No Records Found")
    .should("be.visible");
  }
}
