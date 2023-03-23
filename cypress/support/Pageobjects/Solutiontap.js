import Solutiontappage from "../Pagesall/Solutiontappage"

class Solutiontap1{

getUrl(){

const baseUrl= Cypress.env('baseUrl')
cy.visit(baseUrl)
cy.viewport(1300,750)
Cypress.on('uncaught:exception', (err, runnable) => {
        
    return false
  })

  cy.on('window:Alert', (str) => {
    expect(str).to.equal('This website uses cookies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners.c')
  })

}
clickOnSolution(){

    return Solutiontappage.getSolutionPage().trigger('mouseover')
}
clickOnSolutiontap(){

return Solutiontappage.getSolutionenter().invoke('removeAttr','target').click({force:true})

}
}
export default new Solutiontap1