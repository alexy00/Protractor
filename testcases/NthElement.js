describe('My First Test', () => {
    it('Get Only Visible Elements', () => {
        browser.waitForAngularEnabled(false); 
        browser.get("https://rahulshettyacademy.com/seleniumPractise/#/");
        

        element(by.css('.search-keyword')).sendKeys("ca");
        browser.sleep(2000);
        element(by.css(':nth-child(1) > .product-action > button')).click();
        browser.sleep(5000)
        

    })
  })