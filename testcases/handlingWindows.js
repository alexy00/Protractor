describe('Handling Windows', function() {
    it('Handling multiple windows', function() {
        browser.waitForAngularEnabled(false);
        browser.get("https://learn.letskodeit.com/p/practice");

        element(by.id('openwindow')).click();
        browser.getAllWindowHandles().then(function(handles){

            browser.switchTo().window(handles[1]).then(function(){

                    browser.getTitle().then(function(text){    
                    console.log("windows title: "+text );
                    element(by.id('search-courses')).click().sendKeys('Java');
                    element(by.xpath("//i[@title='Search']")).click();
                    browser.sleep(3000);
                    browser.close();
                    browser.sleep(3000);
                    
        
                });

            
            });
        });

    });
})
