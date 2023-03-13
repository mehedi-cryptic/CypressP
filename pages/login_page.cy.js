export class LoginPage{
    loginPage_username="#uname";
    loginPage_password="#pwd";
    loginPage_login_button='[type="submit"]';
navigate(url){
    cy.visit(url);
}
enterUserName(username){
    cy.get(this.loginPage_username).type(username,{timeout:4000});
}
enterPassword(password){
    cy.get(this.loginPage_password).type(password);
}
clickLogin(){   
    cy.get(this.loginPage_login_button).click();
}

}