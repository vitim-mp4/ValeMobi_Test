/// <reference types="cypress" />

describe('Login Incorreto', () => {

  it('erro-login-email', () => {
    cy.loadTreadeMap()
    cy.nologinTrademapEmail()
  })
  it('erro-login-cpf', () => {
    cy.loadTreadeMap()
    cy.nologinTrademapCpf()
  })
  it('erro-login-telefone', () => {
    cy.loadTreadeMap()
    cy.nologinTrademapTelefone()
  })
  })