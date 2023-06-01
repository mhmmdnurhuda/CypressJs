describe('Modul Login', () => {
    it('Login Berhasil', () => {
      cy.visit('https://demowebshop.tricentis.com/login/')
      cy.get('#Email').type('MuhammadNurHuda@sanbercode45.com')
      cy.get('#Password').type('hudahuda')
      cy.get('form > .buttons > .button-1').click()
        //Validasi
      cy.get('.ico-logout').should('be.visible')
      cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible')
    })

    it('Login Gagal Salah Email', () => {
      cy.visit('https://demowebshop.tricentis.com/login/')
      cy.get('#Email').type('huda@mandiri.com')
      cy.get('#Password').type('hudahuda')
      cy.get('form > .buttons > .button-1').click()
        //Validasi
      cy.get('.validation-summary-errors > span').should('be.visible')
      cy.get('.validation-summary-errors > ul > li').should('be.visible')
    })

    it('Login Gagal Email Kosong', () => {
      cy.visit('https://demowebshop.tricentis.com/login/')
      cy.get('#Email').clear('')
      cy.get('#Password').type('hudahuda')
      cy.get('form > .buttons > .button-1').click()
        //Validasi
      cy.get('.validation-summary-errors > span').should('be.visible')
      cy.get('.validation-summary-errors > ul > li').should('be.visible')
    })
})