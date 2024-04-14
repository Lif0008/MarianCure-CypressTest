describe('Home-Page', () => {
  beforeEach(() => {
   
      cy.viewport(1280, 720)

      cy.visit('http://localhost:5173/home')
      
     
  })

  it('Log in Sucessfully', () => {

    cy.get('#usernameInput')
      .type('aruiz')
     

    cy.get('#passwordInput')
      .type('1234')
      cy.wait(2000)

      cy.get('#passwordVisibilityButton')
      .click()
    cy.wait(800)
    
    cy.get('#passwordVisibilityButton')
      .click()
      cy.wait(2000)
   

      cy.get('#loginButton')
      .click()
      cy.get('.rounded-lg')
      .click()
  })




})