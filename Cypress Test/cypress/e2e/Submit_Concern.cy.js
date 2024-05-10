describe('Submit-Concern', () => {
  beforeEach(() => {
   
      cy.viewport(1280, 720)

      cy.visit('https://mariancure.netlify.app/home')
      
     
  })

  it('Successfully submits a concern', () => {

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

      cy.contains('Send us your concern')
      .click()

      cy.log('Filling up the Personal Information')

      cy.get('#genderInput')
      .select('Female')

      cy.get('#genderInput')
      .select('Male')

      cy.get('#ageInput')
      .type('21')
      
      cy.get('#contactNumberInput')
      .type('09122333123')

      cy.get('#weightInput')
      .type('76')

      cy.get('#heightInput')
      .type('157')

      cy.log('Filling up the General Information')

      cy.get('#alcoholicInput')
      .check()

      cy.get(':nth-child(6) > #complaintInput')
      .type('stomach ache')

      cy.get('#familyhistoryInput')
      .type('None')

      cy.get('#allergyInput')
      .type('Peanut')

      cy.get('#patientHistoryInput')
      .type('None')

      cy.log('Filling up the Medical History')
      cy.get('#previousmedInput')
      .type('None')

      cy.get('#currentmedInput')
      .type('Ambroxol')

      cy.get('.buttonMain')
      .click()

  })

  it('Submit a concern with missing mandatory fields', () => {

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

      cy.contains('Send us your concern')
      .click()

      cy.log('Filling up the Personal Information')

      cy.get('#genderInput')
      .select('Female')

      cy.get('#genderInput')
      .select('Male')

      cy.get('#ageInput:empty')
    
      
      cy.get('#contactNumberInput:empty')
 

      cy.get('#weightInput:empty')
   

      cy.get('#heightInput:empty')
   

      cy.log('Filling up the General Information')

      cy.get('#alcoholicInput')
      .check()

      cy.get(':nth-child(6) > #complaintInput:empty')
     

      cy.get('#familyhistoryInput:empty')


      cy.get('#allergyInput:empty')
 

      cy.get('#patientHistoryInput:empty')
      

      cy.log('Filling up the Medical History')
      cy.get('#previousmedInput')
      .type('None')

      cy.get('#currentmedInput')
      .type('Ambroxol')

      cy.get('.buttonMain')
      .click()


  })
  

























})