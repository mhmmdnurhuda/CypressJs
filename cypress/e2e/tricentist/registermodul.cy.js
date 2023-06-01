describe('Modul Register', () => {
    it('Register Sukses', () => {
      cy.visit('https://demowebshop.tricentis.com/')
      cy.get('.ico-register').click()
      cy.get('#gender-male').click()
      cy.get('#FirstName').type("Muhammad")
      cy.get('#LastName').type("Nur Huda")
      cy.get('#Email').type("MuhammadNurHuda2222@sanbercode45.com") //Hanya bisa run 1 kali karna langsung terdaftar di database
      cy.get('#Password').type("hudahuda")
      cy.get('#ConfirmPassword').type("hudahuda")
      cy.get('#register-button').click()
      cy.wait(20000) //Validasi
      cy.get('.result').should('contain.text','Your registration completed')
      })

      it('Register Gagal Email Terdaftar', () => {
        cy.visit('https://demowebshop.tricentis.com/')
        cy.get('.ico-register').click()
        cy.get('#gender-male').click()
        cy.get('#FirstName').type("User")
        cy.get('#LastName').type("Salah")
        cy.get('#Email').type("MuhammadNurHuda@sanbercode45.com")
        cy.get('#Password').type("hudahuda")
        cy.get('#ConfirmPassword').type("hudahuda")
        cy.get('#register-button').click()
        cy.wait(20000) //Validasi
        cy.get('.validation-summary-errors > ul > li').should('contain.text','The specified email already exists')
        })
})