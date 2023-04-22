// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
const config = require("../../config/config.local")

//Logar na plataforma
Cypress.Commands.add('loadTreadeMap', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://portal.trademap.com.br/onboard/login');
    cy.title().should('eq', 'TradeMap')
})
//login correto email
Cypress.Commands.add('loginTrademapEmail', () => {
    cy.get('#cpf').type(config.login.useremail)
    cy.get('#password').type(config.login.pass)
    cy.contains('Entrar na minha conta').click()
    cy.wait(5000)
})
//clicar em home
Cypress.Commands.add('clickhome', () => {
    cy.wait(2000)
    cy.contains('home')
})
//login correto cpf
Cypress.Commands.add('loginTrademapCpf', () => {
    cy.get('#cpf').type(config.login.usercpf)
    cy.get('#password').type(config.login.pass)
    cy.contains('Entrar na minha conta').click()
    cy.wait(5000)
})
//login correto telefone
Cypress.Commands.add('loginTrademapTelefone', () => {
    cy.get('#cpf').type(config.login.usertelefone)
    cy.get('#password').type(config.login.pass)
    cy.contains('Entrar na minha conta').click()
    cy.wait(5000)
})
//login incorreto email
Cypress.Commands.add('nologinTrademapEmail', () => {
    cy.get('#cpf').type('user-errado')
    cy.get('#password').type('user-errado')
    cy.contains('Entrar na minha conta').click()
    cy.wait(5000)
})
//login incorreto cpf
Cypress.Commands.add('nologinTrademapCpf', () => {
    cy.get('#cpf').type('user-errado')
    cy.get('#password').type('user-errado')
    cy.contains('Entrar na minha conta').click()
    cy.wait(5000)
})
//login incorreto telefone
Cypress.Commands.add('nologinTrademapTelefone', () => {
    cy.get('#cpf').type('user-errado')
    cy.get('#password').type('user-errado')
    cy.contains('Entrar na minha conta').click()
    cy.wait(5000)
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })