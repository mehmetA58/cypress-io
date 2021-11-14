/// <reference types="cypress" />

context("Hata ayiklama yontemleri", () => {
    it("Pause,Debugger ve Debug", () => {
        cy.get("li:nth-of-type(1) > .d-inline.icheck-primary.ml-2 > label").click();
        cy.get(".todo-list.ui-sortable > li:nth-of-type(1)").should(
            "have.class",
            "done"
        );

        cy.get("li:nth-of-type(3) > .text")
            .invoke("text")
            .then((str) => {
                str = str.trim();
                cy.log(str);
            });
        debugger;
        cy.get("li:nth-of-type(4) > .d-inline.icheck-primary.ml-2 > label").click();
    });
});