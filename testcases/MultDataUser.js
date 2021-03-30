var MultCredentials = require('./MultCredentials.json'); // import Credentials.json
var using = require('jasmine-data-provider');

describe('Multiple Data providers', () => {
    beforeEach(function(){
        browser.waitForAngularEnabled(false); 
        browser.get("https://accounts.google.com/");
        
    });

    function plusprovider(){

        return [
            {username:MultCredentials.username,password:MultCredentials.password},
            {username:MultCredentials.username1,password:MultCredentials.password1}
        ];
    }

    //using([{username:MultCredentials.username,password:MultCredentials.password},{username:MultCredentials.username1,password:MultCredentials.password1}],function(data){
        
    using (plusprovider,function(data){  
        it('Data Providers user', () => {
            browser.waitForAngularEnabled(false); 
            browser.get("https://accounts.google.com/");
    
            element(By.id('identifierId')).sendKeys(data.username);//username comes from Credentials.json
            console.log(data.username)
            browser.sleep(5000);
        })
    });
    
  });

