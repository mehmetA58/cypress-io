/// <reference types="cypress" />
context("Actions", () => {
    it("Xpath Login", () => {
        const emailInputXPath = "//input[@type='email' and @name='username'] ";
        const passwordInputXPath = "//input[@name='password']";
        const submitButtonXPath = "//input[@type='submit']";
        cy.visit("https://test.iyikisordun.com/login.php");
        cy.xpath(emailInputXPath).type("cypress_test_1@gmail.com");
        cy.xpath(passwordInputXPath).type("admin_123");
        cy.xpath(submitButtonXPath).click();
    });
});