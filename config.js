exports.config = {
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      'browserName': 'chrome'
    },
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',
    specs: ['testcases/MultDataUser.js'],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter());
      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
    }
    
  };