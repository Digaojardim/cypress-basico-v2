Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Deda");
  cy.get("#lastName").type("Ruy");
  cy.get("#email").type("diogenes.jj@gmail.com");
  cy.get("#phone").type(119735456);
  cy.get("#product").select("Blog");
  cy.get(":nth-child(3) > input").click();
  cy.get("#email-checkbox").click();
  cy.get("#open-text-area").type("Teste");
  cy.get('button[type="submit"]').click();
});
