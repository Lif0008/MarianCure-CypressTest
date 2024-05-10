describe('Forgot Password', () => {
  beforeEach(() => {
   
      cy.viewport(1280, 720)

      cy.visit('https://mariancure.netlify.app/login')
      
     
  })

  it('Successful changed of password', () => {

    cy.get('.mb-9 > .font-medium')
    .click()

    cy.get('#FirstName')
    .type('luffy@gmail.com')

    cy.get('#loginButton')
    .click()
    cy.wait(2000)


    cy.get('#FirstName')
     .type('meat')

     cy.get('#LastName')
     .type('meat')

     cy.get('.float-right')
     .click()

     cy.get('#navButton')
     .click()


     cy.log('Proceeding With Logging in with the old Password')



    cy.get('#usernameInput')
      .type('luffy')
     

    cy.get('#passwordInput')
      .type('luffy')
      cy.wait(2000)

      cy.get('#passwordVisibilityButton')
      .click()
    cy.wait(800)
    
    cy.get('#passwordVisibilityButton')
      .click()
      cy.wait(2000)
   

      cy.get('#loginButton')
      .click()

      cy.log('Accessed must be denied')
      cy.log('Proceeding With Logging in with the New Password')

      cy.get('#usernameInput')
      .clear()
      .type('luffy')
     

    cy.get('#passwordInput')
    .clear()
      .type('meat')
      cy.wait(2000)

      cy.get('#passwordVisibilityButton')
      .click()
    cy.wait(800)
    
    cy.get('#passwordVisibilityButton')
      .click()
      cy.wait(2000)
   

      cy.get('#loginButton')
      .click()

      cy.contains('Welcome to Marian Cure!').should('be.visible')
      cy.wait(2000)


  })


  it('Leaving mandatory fields empty during registration', () => {

    cy.get('.mb-9 > .font-medium')
    .click()

    cy.get('#FirstName')
    .type('luffy@gmail.com')
    

    cy.get('#loginButton')
    .click()
    cy.wait(2000)


    cy.log('Proceeding With Empty Field Boxes')
    cy.get('#FirstName:empty')

    cy.get('#LastName:empty')

    cy.get('.float-right')
    .click({force: true})
    cy.log('Cannot Proceed With Empty Fields ')


  })

  it('Invalid email address', () => {

    cy.get('.mb-9 > .font-medium')
    .click()


    cy.log('Proceeding With unknown email address')
    cy.get('#FirstName')
    .type('abcdefghijklmnop@gmail.com')

    cy.get('#loginButton')
    .click()
    cy.wait(2000)


    
    cy.contains('Error').should('exist')


  })




})