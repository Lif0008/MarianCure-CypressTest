describe('Submit-Concern', () => {
  beforeEach(() => {
   
      cy.viewport(1280, 720)

      cy.visit('https://mariancure.netlify.app/home')
      
     
  })

  it('Successfully submits a concern', () => {

    cy.get('#usernameInput')
      .type('JR')
     

    cy.get('#passwordInput')
      .type('JR')
      cy.wait(2000)

      cy.get('#passwordVisibilityButton')
      .click()
    cy.wait(800)
    
    cy.get('#passwordVisibilityButton')
      .click()
      cy.wait(2000)
   

      cy.get('#loginButton')
      .click()
      cy.wait(2000)

      cy.contains('Welcome to Marian Cure!').should('be.visible')

      cy.get('.flex > .pi')
      .click()

      cy.get('.z-40 > .flex-col > :nth-child(3)')
      .click()

      cy.get('#row-1 > #cell-7-undefined > .buttonIcon')
      .click()
  })


  })