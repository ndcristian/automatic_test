/// <reference types="cypress" />


describe('test model', ()=>{

  it('correct menu', ()=>{

 cy.visit('http://localhost:4200/')
    cy.contains('Welcometest')
    cy.contains('Next')
    // cy.contains('ZF AD')
    

    // cy.visit('http://localhost:4200/')
    // cy.contains('Alumgates v2')
    // cy.contains('Ofertare')
    // cy.contains('Admin')
    // cy.contains('Login')
    // cy.contains('Logout')
    // cy.visit('https://ui-demo.zf-v2x.com/')

  })
 
})
