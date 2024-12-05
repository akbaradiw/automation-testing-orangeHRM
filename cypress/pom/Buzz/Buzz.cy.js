export default class BuzzPom {
  static clickBuzz() {
    return cy.get('[href="/web/index.php/buzz/viewBuzz"]').click();
  }
  static postInput() {
    return cy.get(`[placeholder="What's on your mind?"]`);
  }

  static postButton() {
    return cy.get('[type="submit"]').click();
  }

  static postSuccess() {
    return cy.get(".oxd-toast").should("be.visible")
      .get(".oxd-grid-1 > :nth-child(1) > .oxd-sheet")
      .should("be.visible");
  }

  static deletePost() {
    return cy
      .get('[class="oxd-icon bi-three-dots"]')
      .eq(1)
      .click()
      .get('[class="oxd-icon bi-trash"]')
      .click()
      .get('[class="oxd-icon bi-trash oxd-button-icon"]')
      .click();
  }

  static editButton() {
    return cy
      .get('[class="oxd-icon bi-three-dots"]')
      .eq(0)
      .click()
      .get('[class="oxd-icon bi-pencil"]')
      .click();
  }

  static InputEditPost() {
    return cy
      .get(".orangehrm-buzz-post-modal-header-text > .oxd-buzz-post")
      .type("my everthing");
  }

  static editPostButton() {
    return cy.get(".oxd-form-actions > .oxd-button").click();
  }

  static editPostSuccess() {
    return cy.get(".oxd-toast").should("be.visible").get(".oxd-grid-1 > :nth-child(1) > .oxd-sheet")
    .should("be.visible");
  }

}
