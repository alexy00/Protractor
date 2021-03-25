describe('Dropdown by celect', function() {
    var result1 = 5;
    var result2 = 6;
    
    beforeEach(function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/calc");
    }),

    afterEach(function(){
        element(by.binding('latest')).getText().then(function(text){
            console.log(text);
            expect(parseInt(text)).toBe(result1);
            expect(parseInt(text)).not.toBe(result2);
            
        })
        
    }),

    it('Slecting SUBTRACT', function() {
      
      element(by.model('first')).sendKeys('10');
      var select = element(by.model('operator'));
      select.$('[value="SUBTRACTION"]').click();
      element(by.model('second')).sendKeys('5');
      element(by.buttonText('Go!')).click(); 
      browser.sleep(3000);
     
  });

  it('Selecting ADD', function() {
      
    element(by.model('first')).sendKeys('2');
    element(by.model('second')).sendKeys('3');
    element(by.buttonText('Go!')).click();
    browser.sleep(3000);
   
});
});
