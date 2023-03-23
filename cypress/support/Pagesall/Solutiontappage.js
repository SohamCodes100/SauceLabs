///<reference types = 'Cypress'/>

class SolutiontapPage1{

getSolutionPage(){

return cy.get(':nth-child(1) >.nav-menu-main-link > .link').eq(6)
}
getSolutionenter(){

return cy.get('#headerMainNav > div > nav > ul > li.nav-menu-list-container > ul:nth-child(2) > li:nth-child(1) > div.nav-menu-link-group-row-list-wrapper > div > div > div > ul > li:nth-child(1) > div > ul > li > div > ul > li:nth-child(1) > div > ul > li > a > span')

}

}
export default new SolutiontapPage1