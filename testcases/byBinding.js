describe('Locator by Binding', function() {
    it('Calculator verification', function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/calc');
     
      element(by.model('first')).sendKeys('10');
      var select = element(by.model('operator'));
      select.$('[value="SUBTRACTION"]').click();
      element(by.model('second')).sendKeys('2');
      element(by.id('gobutton')).click();
      browser.sleep(3000);
      element(by.binding('latest')).getText().then(function(text){  //from View page source
          console.log(text);
  });
    
});
})