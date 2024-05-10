describe('View Patients Concern', () => {
  beforeEach(() => {
   
      cy.viewport(1280, 720)

      cy.visit('https://mariancure.netlify.app/login')
      
     
  })

  it('Successfully viewed the patient concern', () => {

    cy.get('#usernameInput')
      .type('JV')
     

    cy.get('#passwordInput')
      .type('jv')
      cy.wait(2000)

      cy.get('#passwordVisibilityButton')
      .click()
    cy.wait(800)
    
    cy.get('#passwordVisibilityButton')
      .click()
      cy.wait(2000)
   

      cy.get('#loginButton')
      .click()
   
      cy.get('.pi-align-right')
      .click()

      cy.get('.z-40 > .flex-col > :nth-child(3)')
      .click()

      cy.get('#row-4 > #cell-7-undefined > .buttonIcon')
      .click()


  })






})