export default class DirectoryPom {
  static clickDirectory() {
    return cy.get('[href="/web/index.php/directory/viewDirectory"]').click();
  }

  static closeSidebar() {
    return cy.get('[class="oxd-icon-button oxd-main-menu-button"]').click();
  }
  static searchEmployee() {
    return cy.get('[placeholder="Type for hints..."]');
  }

  static selectJobRole() {
    return cy.get ('[class="oxd-select-text oxd-select-text--active"]').eq(0).click();
   
  }

  static selectChiefFinancialOfficer() {
    return cy.get('[class="oxd-select-option"]').eq(4).click();
  }

  static selectLocation() {
    return cy.get ('[class="oxd-select-text oxd-select-text--active"]').eq(1).click();
   
  }

  static selectNewYork() {
    return cy.get('[class="oxd-select-option"]').eq(3
    ).click();
  }

  static searchButton() {
    return cy.get('[type="submit"]').click();
  }

  static peterImage() {
    return cy.get('[ src="/web/index.php/pim/viewPhoto/empNumber/3"]').should("be.visible");
  }

  static saniaImage() {
    return cy.get('[ src="/web/index.php/pim/viewPhoto/empNumber/22"]').should("be.visible");

  } }
