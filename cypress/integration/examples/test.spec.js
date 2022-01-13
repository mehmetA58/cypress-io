 ///  <reference types="cypress" />

import helper from "../../support/helper";

    context("Promise", () => {

    it("Promise Return", async () => {
        cy.visit("www.test.iyikisordun.com/login.php")
        const test=await helper.GetTextFunction_('h1')
        cy.log(test)
    })
})
