/// <reference types="cypress" />
import login from "../../PageObjectModel/login";

context("POM", () => {
    const login_=new login()
    it("Login", () => {
        cy.visit("www.test.iyikisordun.com/login.php")

        login_.emailInput().should("be.visible").type("cypress_test_1@gmail.com")
        login_.passwordInput().should("be.visible").type("admin_123")
        login_.submitButton().should("be.visible").click()
        cy.screenshot()
        })
    })
