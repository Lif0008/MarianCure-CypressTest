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

      cy.get('.rounded-lg')
      .click({ multiple: true })
      cy.wait(2000)

      cy.log('Filling up the Personal Information')
      cy.get('#fullNameInput')
      .type('Jack O. Lantern')

      cy.get('#genderInput')
      .type('Male')

      cy.get('#ageInput')
      .type('21')
      
      cy.get('#contactNumberInput')
      .type('09123456789')

      cy.get('#weightInput')
      .type('76')

      cy.get('#heightInput')
      .type('157')

      cy.log('Filling up the General Information')
      cy.get('#alcoholicInput')
      .check()

      cy.get(':nth-child(6) > #complaintInput')
      .type('Headache')

      cy.get('#familyhistoryInput')
      .type('None')

      cy.get('#allergyInput')
      .type('Peanut')

      cy.get('#patientHistoryInput')
      .type('None')

      cy.get('#patientHistoryInput')
      .type('None')


      cy.log('Filling up the Medical History')
      cy.get('#previousmedInput')
      .type('None')

      cy.get('#currentmedInput')
      .type('None')

      cy.get('.buttonMain')
      .click()
      

    


  })

    })