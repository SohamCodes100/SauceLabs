import Platformpage from "../Pagesall/Platformpage"

class Platform1{

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
        
        clickOnPlatform001(){

            return Platformpage.clickOnplatform().trigger('mouseover')
        }
        clickOnBrowser(){

         return Platformpage.clickOnBrowser().click({force: true})

        }

        clickOnPlatformconfig(){

            return Platformpage.clickOnPlatformconfig().click({force: true}).wait(5000)

        }
        clickOnDropdown(){

            return Platformpage.clickonDropdown().select("python")
        }


}
export default new Platform1