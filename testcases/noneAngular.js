var PageFactory = require('./pageFactory.js');

describe('Promise example',function(){
  
  var pf = new PageFactory();

    beforeEach(function() {
        browser.waitForAngularEnabled(false); // Need this for nonAngular
        browser.get('https://learn.letskodeit.com/p/practice');
      });
      it("validate customer login test", function(){
        pf.bmwCheck().click();
        pf.benzCheck.click();
        pf.hondaCheck.click();
        browser.sleep(3000)   
     });
});