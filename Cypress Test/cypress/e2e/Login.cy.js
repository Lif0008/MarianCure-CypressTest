describe('Login Page', () => {
  beforeEach(() => {
   
      cy.viewport(1280, 720)

      cy.visit('http://192.168.254.114:5173/')
      
     
  })

  it('Log in Sucessfully', () => {

    cy.get('#usernameInput')
      .type('aruiz')
      cy.wait(2000)

    cy.get('#passwordInput')
      .type('1234')
      cy.wait(2000)

    cy.get('.mb-9 > .flex > .h-full')
      .click()
    cy.wait(800)
    
    cy.get('.mb-9 > .flex > .h-full')
      .click()
      cy.wait(2000)
   

    cy.get('.buttonMain')
      .click()


      cy.get('.buttonMain')
      .click()
      cy.wait(2000)
      
     

    })
    it('Empty Fields During Login Attempt', () => {

      cy.get('#usernameInput:empty')
      cy.wait(2000)
  
      cy.get('#passwordInput:empty')
      cy.wait(2000)
  
    
      
 
  
      cy.get('.buttonMain')
        .click()

       
  
      })
      it('Incorrect Password Entry', () => {

        cy.get('#usernameInput')
          .type('aruiz')
          cy.wait(2000)
        cy.get('#passwordInput')
          .type('1237')
          cy.wait(2000)

        cy.get('.mb-9 > .flex > .h-full')
          .click()
    
        cy.wait(800)
        
        cy.get('.mb-9 > .flex > .h-full')
          .click()
          
    
        cy.get('.buttonMain')
          .click()

    
    
        })

        it(' Incorrect ID Entry', () => {

          cy.get('#usernameInput')
            .type('aruizi')
      
          cy.get('#passwordInput')
            .type('1234')
      
          cy.get('.mb-9 > .flex > .h-full')
            .click()
      
          cy.wait(800)
          
          cy.get('.mb-9 > .flex > .h-full')
            .click()
      
          cy.get('.buttonMain')
            .click()

      
          })
          it(' Non-Existent Account', () => {

            cy.get('#usernameInput')
              .type('Dummy')
        
            cy.get('#passwordInput')
              .type('PassDummy')
        
            cy.get('.mb-9 > .flex > .h-full')
              .click()
        
            cy.wait(800)
            
            cy.get('.mb-9 > .flex > .h-full')
              .click()
        
            cy.get('.buttonMain')
              .click()

        
        
            })




  })