
import './commands'
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('querySelector')) {
    return false
  }
})