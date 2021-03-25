describe('Handling Alerts', function() {
    it('clicking on browser alert', function() {
        browser.waitForAngularEnabled(false);
        browser.get("https://mail.rediff.com/cgi-bin/login.cgi");
        let go = element(by.name("proceed"));
        browser.sleep(3000);
        go.click();
        browser.sleep(1000);
        var alert = browser.switchTo().alert();
        alert.getText().then(function(text){
            console.log(text); 
        });
        alert.accept(); 
        element(by.id('login1')).sendKeys('alabandy');
        element(by.id('password')).sendKeys('alabandy');
        go.click();
        browser.sleep(3000);
    
        });
    });


                    

    

    