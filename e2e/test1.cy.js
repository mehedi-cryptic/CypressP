/// <reference types="cypress"/>

it('google test', function() {
    cy.visit("https://google.com");
    cy.wait(10000);
    cy.get('.gLFyf').type("facebook{enter}");
    //cy.get('[href="https://www.facebook.com/"] > .LC20lb', {timeout:5000}).click();
    cy.get('[style="display:inline-block;line-height:18px;margin-top:8px;padding:0;font-size:13px"]').click();
    //cy.contains('Videos').click()
    //cy.get('.MgQdud > .O3S9Rb').click();
}
)