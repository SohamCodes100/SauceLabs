import PlatformT from "../../support/Pageobjects/PlatformT";

class Plaformspec{

    init(){

        PlatformT.getUrl()
        PlatformT.clickOnPlatform001()
        PlatformT.clickOnBrowser()
        PlatformT.clickOnPlatformconfig()
        PlatformT.clickOnDropdown()
        
    }
}
export default new Plaformspec