describe('Login Page', () => {
  beforeEach(() => {
   
      cy.viewport(1280, 720)

      cy.visit('https://mariancure.netlify.app/login')
      
     
  })

  it('Log in Successfully', () => {

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

      cy.contains('Welcome to Marian Cure!').should('be.visible')
      cy.wait(2000)

      
     
      
     

    })
    it('Empty Fields During Login Attempt', () => {

      cy.get('#usernameInput:empty')
      cy.wait(2000)
  
      cy.get('#passwordInput:empty')
      cy.wait(2000)
 
  
      cy.get('#loginButton')
      .click()

        cy.contains('Error').should('exist')

       
  
      })
      it('Incorrect Password Entry', () => {

        cy.get('#usernameInput')
          .type('JV')


          cy.wait(2000)
        cy.get('#passwordInput')
          .type('1237')
          cy.wait(2000)

          cy.get('#passwordVisibilityButton')
          .click()
    
        cy.wait(800)
        
        cy.get('#passwordVisibilityButton')
          .click()
          
    
          cy.get('#loginButton')
          .click()

          cy.contains('Error').should('exist')
    
        })

        it(' Incorrect ID Entry', () => {

          cy.get('#usernameInput')
            .type('JC')
      
          cy.get('#passwordInput')
            .type('jv')
      
            cy.get('#passwordVisibilityButton')
            .click()
      
          cy.wait(800)
          
          cy.get('#passwordVisibilityButton')
            .click()
      
            cy.get('#loginButton')
            .click()
            cy.contains('Error').should('exist')
      
          })
          it(' Non-Existent Account', () => {

            cy.get('#usernameInput')
              .type('Dummy')
        
            cy.get('#passwordInput')
              .type('PassDummy')
        
            cy.get('#passwordVisibilityButton')
              .click()
        
            cy.wait(800)
            
            cy.get('#passwordVisibilityButton')
              .click()
        
              cy.get('#loginButton')
              .click()

              cy.contains('Error').should('exist')
        
            })




  })