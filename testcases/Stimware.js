describe('Steamware', function() {
    it('Contact Form', function() {
        browser.waitForAngularEnabled(false);
        browser.get("https://stimwavefreedom.com/");

        browser.sleep(5000);
        element(by.css("#menu-patient-main > :nth-child(6) > a")).click();
        //element(by.id('login1')).sendKeys('alabandy');
        element(by.id('swcontactform-firstname')).sendKeys("First");
        element(by.id('swcontactform-lastname')).sendKeys("Last");
        element(by.id('swcontactform-city')).sendKeys("City");
        element(by.id('swcontactform-state')).sendKeys("State");
        element(by.id('swcontactform-zip')).sendKeys("11111");
        element(by.id('swcontactform-email')).sendKeys("email@gmail.com");
        element(by.id('swcontactform-phone')).sendKeys("1234567890");
        const  selectPain = element(by.id('swcontactform-pain_area'));
        selectPain.$('[value="2"]').click();
        const  selectReferral = element(by.id('swcontactform-pain_area'));
        selectReferral.$('[value="4"]').click();
        browser.sleep(3000);
        browser.switchTo().frame(0).then(function(){

            let tryIt = element(by.css("span[role='checkbox']"));
            tryIt.click();
        })
        browser.switchTo().defaultContent();
        })
        
    })
        
