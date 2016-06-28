'use strict';

const istanbul = require('browserify-istanbul');
const isparta  = require('isparta');

const karmaBaseConfig = {

    basePath: '../',
    singleRun: true,
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
        'app/@(js|modules)/**/!(*spec|*tpl|*css|index).js': ['browserify', 'coverage']
    },
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],

    coverageReporter: {
        reporters : [
            {
                "type": "text",
                dir: 'reports/coverage'
            },
            {
                "type": "html", 
                dir: 'reports/coverage'
            }
        ]
    },

    autoWatch: true,

    browserify: {
        debug: true,
        extensions: ['.js'],
        transform: [
            'babelify',
            'browserify-ngannotate',
            'bulkify',
            istanbul({
                instrumenter: isparta,
                instrumenterConfig: { embedSource: true },
                ignore: ['**/node_modules/**', '**/test/**', '**/app/js/mocks/**/*.js', '**/*_spec.js', '**/*_tpl.js', '**/*_css.js', '**/index.js', '**/app/js/settings/mocks.js']
            })
        ]
    },

    proxies: {
        '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    files: [
        // app-specific code
        { pattern: 'app/@(js|modules)/**/!(*tpl|*css|index).js', included: true },

        // 3rd-party resources
        { pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false },

        // test files
        'test/unit/**/*.js'
    ]

};

const customLaunchers = {
    chrome: {
        base: 'SauceLabs',
        browserName: 'chrome'
    }
};

const ciAdditions = {
    sauceLabs: {
        testName: 'Karma Unit Tests',
        startConnect: false,
        build: process.env.TRAVIS_BUILD_NUMBER,
        tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
    },
    browsers: Object.keys(customLaunchers),
    customLaunchers: customLaunchers,
    reporters: ['progress', 'coverage', 'saucelabs']
};

module.exports = function(config) {
    const isCI = process.env.CI;
    config.set(isCI ? Object.assign(karmaBaseConfig, ciAdditions) : karmaBaseConfig);

    // config.set({
    //     coverageReporter: {
    //         instrumenterOptions: {
    //             istanbul: { noCompact: true }
    //         }
    //     }
    // });
};