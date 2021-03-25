describe('Handling Frames', function() {
    it('Handling multiple frames', function() {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get");

            browser.switchTo().frame("iframeResult").then(function(){

                    let tryIt = element(by.xpath("//button[contains(text(),'Try it')]"));
                    browser.sleep(3000);
                    tryIt.click();
                    browser.sleep(3000);
                    element(by.xpath("//p[@id='demo']")).getText().then(function(text){
                        console.log(text);
                        expect(text).toContain("Submit the form");
                });
                browser.switchTo().defaultContent();
                element(by.xpath("//button[contains(text(),'Run')]")).click();
                browser.sleep(3000);
            });

        });

    })

    
