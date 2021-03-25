exports.config = {
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      'browserName': 'chrome'
    },
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',
    specs: ['testcases/Stimware.js'],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
    
  };