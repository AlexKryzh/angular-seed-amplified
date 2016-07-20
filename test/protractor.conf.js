require('babel-register');

const gulpConfig = require('../tools/config').default;

exports.config = {

    allScriptsTimeout: 11000,

    baseUrl: `http://localhost:${gulpConfig.testPort}/`,

    directConnect: true,

    capabilities: {
        browserName: 'chrome',
        version: '',
        platform: 'ANY'
    },

    framework: 'jasmine2',

    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },

    // The file path to the selenium server jar () 
    //seleniumServerJar: './../node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',

    chromeDriver: './../node_modules/protractor/selenium/chromedriver_2.21',

    specs: [
        'e2e/**/*_spec.js'
    ]

};
