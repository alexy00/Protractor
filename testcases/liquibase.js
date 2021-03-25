describe('Liquibase', function() {
    it('Test1', function() {

      beforeEach(async function() {
        //browser.waitForAngularEnabled(false); // Need this for nonAngular
        await browser.get('https://hub-staging.liquibase.com/landing-page');
        expect(await browser.getTitle()).toEqual('Liquibase Hub');
        //browser.ignoreSynchronization = true;
        browser.sleep(3000);
        //browser.sleep(3000);
      });
      
      element(by.buttonText("Log In")).click();
      browser.ignoreSynchronization = false;
      browser.sleep(3000)

      //element(by.className("container")).click();
      //browser.sleep(3000)
      //element(by.id("signInFormUsername")).sendKeys("aaa");

      
    
});
})