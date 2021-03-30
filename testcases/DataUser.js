var Credentials = require('./Credentials.json'); // import Credentials.json
//npm i jasmine-data-provider   (install dependency)

describe('Data providers', () => {
    it('Data Providers user', () => {
        browser.waitForAngularEnabled(false); 
        browser.get("https://accounts.google.com/");
        element(By.id('identifierId')).sendKeys(Credentials.username);//username comes from Credentials.json
        browser.sleep(5000);
    })
  })
