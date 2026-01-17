class homePage {
  addCafePorDado(dataCy) {
    cy.get(`[data-cy="${dataCy}"]`).click()
    }

  pularDiaDeSorte() {
    cy.contains("Nah, I'll skip").click()
    }

  validarQuantidadeNoCarrinho(qtd) {
    cy.contains(`cart (${qtd})`).should('be.visible')
    }

  validarTotal(valorEsperado) {
    cy.get('[data-test="checkout"]').should('contain.text', `$${valorEsperado}`)
    }

  acessarTotal(){
      cy.get('[data-test="checkout"]').click()
    }
}

export default new homePage()
