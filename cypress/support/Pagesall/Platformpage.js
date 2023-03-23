///<reference types = 'Cypress'/>
/// <reference types="cypress-iframe" />

class PlatformPage{

clickOnplatform(){
    return cy.xpath("(//a[text()='Platform'])[2]")

}
clickOnBrowser(){

    return cy.xpath("(//span[text()='Browsers & Devices'])[2]")
}

clickOnPlatformconfig(){

    return cy.xpath("//span[text()='Platform configurator']")

}

clickonDropdown(){

    cy.frameLoaded(".platforms-configurator-content")
    //cy.iframe().find("iframe[class='platforms-configurator-content']").click({force:true})
    return cy.iframe().find("//button[@id='dropdown-custom-lang']")
    
}
}
export default new PlatformPage