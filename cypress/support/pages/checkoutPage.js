class checkoutPage{
    preencherNome(){
        cy.get('input[name= "name"]').type(`${Cypress.env('firstName')} ${Cypress.env('lastName')}`)
    }

    preencherEmail(){
        cy.get('input[name= "email"]').type(Cypress.env('Email'))
    }

    enviarCheckout() {
        cy.contains('Submit').click()
  }

    validarMensagemSucesso() {
        cy.contains('Thanks for your purchase').should('be.visible')
  }
}

export default new checkoutPage()