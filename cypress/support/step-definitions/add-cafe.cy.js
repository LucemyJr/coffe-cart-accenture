import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import homePage from '../pages/homePage'
import checkoutPage from '../pages/checkoutPage'

Given('que estou na página inicial', () => {
  cy.visit('/')
})

When('adiciono 3 cafés ao carrinho', () => {
    homePage.addCafePorDado('Cafe-Latte')
    homePage.addCafePorDado('Espresso')
    homePage.addCafePorDado('Mocha')
})

And('recuso a oferta de café extra', () => {
    homePage.pularDiaDeSorte()
})

Then('devo ver o total correto no carrinho', () => {
    homePage.validarQuantidadeNoCarrinho(3)
})

And('o total deve ser {string}', (valor) => {
    homePage.validarTotal(34.00)
})

When ('acesso o total', () =>{
    homePage.acessarTotal()
})

And ('preencho nome e email', () => {
  checkoutPage.preencherNome()
  checkoutPage.preencherEmail()
  checkoutPage.enviarCheckout()
})

Then('devo conseguir finalizar o cadastro', () => {
    cy.screenshot('fluxo-finalizado-com-sucesso')
    cy.get('.snackbar').should('be.visible')

})

