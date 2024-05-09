describe('Login Page', () => {
  beforeEach(() => {
   
      cy.viewport(1280, 720)

      cy.visit('https://mariancure.netlify.app/login')
      
     
  })

  it('Successfully viewed the patient concern', () => {

    cy.get('#usernameInput')
      .type('EAbasolo_Pharma')
     

    cy.get('#passwordInput')
      .type('EAbasolo1234')
      cy.wait(2000)

      cy.get('#passwordVisibilityButton')
      .click()
    cy.wait(800)
    
    cy.get('#passwordVisibilityButton')
      .click()
      cy.wait(2000)
   

      cy.get('#loginButton')
      .click()
      cy.log('Log in Sucessfully, Using Ervin Michael Abasolo, RPh -Pharmacist Account-')

      cy.contains('View patients')
      .click()
      cy.log('View Patients Concern Sucessfully')
     
      cy.get('.text-center')
      .should('contain', 'Medical Reports')
      cy.log('Medical Report Text Confirmed')
      cy.log('Proceeding to view patients concern')

    
      cy.get('#row-1 > #cell-7-undefined > .buttonIcon')
      .click()
      cy.log('Sucessfully View the Patient Concern')

      cy.contains('Medical Report Form')
      .should('contain', 'Medical Report Form')
      cy.log('Assertion, Text Medical Report Form Exist Confirmed')
  })






})