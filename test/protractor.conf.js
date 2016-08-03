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

    specs: [
        'e2e/**/*_spec.js'
    ]

};
