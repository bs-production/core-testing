const mainURL = "https://www.homepromatch.com/";

describe('Kitchen Sink', function () {

    it('.should() - assert that <title> is correct', function () {

      cy.visit(mainURL)
      cy.title().should('include', 'HomePro')
      //   ↲               ↲            ↲
      // subject        chainer      value
    })


   it('screenies', function () {

      cy.viewport(2999, 2999)
      cy.wait(200)
     
      cy.viewport('ipad-2')
      cy.wait(200)
      cy.viewport('ipad-mini')
      cy.wait(200)
      cy.viewport('iphone-6+')
      cy.screenshot('iphone-6+')
      cy.wait(200)
      cy.viewport('iphone-6')
      cy.screenshot('iphone-6')
      cy.wait(200)
      cy.viewport('iphone-6')
      cy.screenshot('iphone-6')
      cy.wait(200)
      cy.viewport('iphone-4')
      cy.screenshot('iphone-4')
      cy.wait(200)
      cy.viewport('iphone-3')
      cy.wait(200)
      cy.viewport('ipad-2', 'portrait')
      cy.screenshot()
      cy.wait(200)
      cy.viewport('iphone-4', 'landscape')
      cy.wait(200)

   })

 




  context('Actions', function () {
    beforeEach(function () {
      cy.visit('https://www.advancedbasementsystems.net/free-estimate.html')
    })

    // Let's perform some actions on DOM elements
    // https://on.cypress.io/interacting-with-elements

        it('.type() - type into a DOM element', function () {
          // https://on.cypress.io/type
          cy.get('#Zip')
            .type('06483').should('have.value', '06483')

          cy.get('.next').click()

          cy.get('#Street')
          .type('60 Silvermine Road').should('have.value', '60 Silvermine Road')

          cy.get('.next').first().click()

          cy.get('#First_Name')
          .type('John Siwicki').should('have.value', 'John Siwicki')
     
        })

        

        it('.submit() - submit a form', function () {
 
 
         })
  });



    context('Querying', function () {

         beforeEach(function () {
            cy.visit(mainURL)
        })

         it('.within() - query DOM elements within a specific element', function () {
              // https://on.cypress.io/within
              cy.get('#phone').within(function () {
                cy.get('a').should('have.class', 'phone_link')
              })
            })




    });


 }); //end Kitchen Sink 