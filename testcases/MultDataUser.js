var MultCredentials = require('./MultCredentials.json'); // import Credentials.json
var using = require('jasmine-data-provider');

describe('Multiple Data providers', () => {
    beforeEach(function(){
        browser.waitForAngularEnabled(false); 
        browser.get("https://accounts.google.com/");
        
    });

    function plusprovider(){

        return [
            {userName:MultCredentials.username,passWord:MultCredentials.password},
            {userName:MultCredentials.username1,passWord:MultCredentials.password1}
        ];
    }

    //using([{userName:MultCredentials.username,passWord:MultCredentials.password},{userName:MultCredentials.username1,passWord:MultCredentials.password1}],function(data){

    using (plusprovider,function(data){  
        it('Data Providers user', () => {
            element(By.id('identifierId')).sendKeys(data.userName);//username comes from Credentials.json
            console.log(data.userName)
            browser.sleep(1000);
        })
    });
    
  });

