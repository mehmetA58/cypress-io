// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
require("cypress-xpath");
import "./commands";
before(() => {
    //butun testlerden önce 1 kez
});
beforeEach(() => {
    //herbir testten önce
    const emailInputXPath = "//input[@type='email' and @name='username'] ";
    const passwordInputXPath = "//input[@name='password']";
    const submitButtonXPath = "//input[@type='submit']";
    cy.visit("https://test.iyikisordun.com/login.php");
    cy.xpath(emailInputXPath).type("cypress_test_1@gmail.com");
    cy.xpath(passwordInputXPath).type("admin_123");
    cy.xpath(submitButtonXPath).click();
});
after(() => {
    //butun testler tamamlandıgında
});
afterEach(() => {
    //her bir testen önce 1 kez
});