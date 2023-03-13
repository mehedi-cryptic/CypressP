import { LoginPage } from "../pages/login_page.cy.js";
let loginPage = new LoginPage();

it('login test',function(){
    loginPage.navigate("https://trytestingthis.netlify.app/");
    loginPage.enterUserName("test");
    loginPage.enterPassword("test");
    loginPage.clickLogin();
    
    
}
)