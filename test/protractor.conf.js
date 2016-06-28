'use strict';

require('babel-core/register');

var gulpConfig = require('../gulp/config');

exports.config = {

    allScriptsTimeout: 11000,

    baseUrl: 'http://localhost:' + gulpConfig.browserPort + '/',

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
    //seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',

    chromeDriver: './../node_modules/protractor/selenium/chromedriver',

    specs: [
        'e2e/**/*_spec.js'
    ]

};
