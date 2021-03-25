describe('Dropdown by celect', function() {
    it('Slecting SUBTRACT', function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/calc');
     
      element(by.model('first')).sendKeys('10');
      var select = element(by.model('operator'));
      select.$('[value="SUBTRACTION"]').click();
      
      browser.sleep(3000);
     
  });
})