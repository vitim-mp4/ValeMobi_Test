/// <reference types="cypress" />

describe('Login correto', () => {

  it('success-login-email', () => {
    cy.loadTreadeMap()
    cy.loginTrademapEmail()
    cy.clickhome()
  })
  it('success-login-cpf', () => {
    cy.loadTreadeMap()
    cy.loginTrademapCpf()
    cy.clickhome()
  })
  it('success-login-telefone', () => {
    cy.loadTreadeMap()
    cy.loginTrademapTelefone()
    cy.clickhome()
  })
})