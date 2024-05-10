describe('View Sent Concern', () => {
  beforeEach(() => {
   
      cy.viewport(1280, 720)

      cy.visit('https://mariancure.netlify.app/home')
      
     
  })

  it('Viewing of the sent concern', () => {

    cy.get('#usernameInput')
      .type('jay')
     

    cy.get('#passwordInput')
      .type('jay')
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

      cy.get('.pi-align-right')
      .click()

      cy.get('.z-40 > .flex-col > :nth-child(3)')
      .click()

      cy.get('#row-0 > #cell-7-undefined > .buttonIcon')
      .click()

      cy.contains('Patient Details').should('be.visible')
  })


  })