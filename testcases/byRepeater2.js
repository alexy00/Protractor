describe('Locator by Repeater', function() {
    it('Calculator verification', function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/calc');
     
      element(by.model('first')).sendKeys('10');
      var select = element(by.model('operator'));
      select.$('[value="SUBTRACTION"]').click();
      element(by.model('second')).sendKeys('2');
      element(by.id('gobutton')).click();

      browser.sleep(3000)

      element(by.model('first')).sendKeys('5');
      var select = element(by.model('operator'));
      select.$('[value="ADDITION"]').click();
      element(by.model('second')).sendKeys('1');
      element(by.id('gobutton')).click();
      browser.sleep(3000);
});
    it('Printing the first column', function() {
        console.log("Printing the first row data")
        element.all(by.repeater('result in memory').column('result.timestamp')).getText().then(function(text){
            console.log(text)
        });
    
    });
})