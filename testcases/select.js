describe ("Test automation of banking app", function(){
    beforeEach(function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

    }),
    it("validate customer login test", function(){
        browser.sleep(3000)
        element(By.buttonText("Customer Login")).click();
        browser.sleep(3000);
        //get count of elements in 'option' tag
        element.all(By.css("#userSelect option")).then(function(items){
            console.log("Total values in dropdown are: "+items.length);
            //get list of elements from 'option' tag
            for (i=0; i<items.length;i++){
                items[i].getText().then(function(text){
                    console.log(text);
                });
            }

        })
     });
});
