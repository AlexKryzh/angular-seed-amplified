const karmaBaseConfig = {

    basePath: '../',
    singleRun: true,
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
        'src/@(scripts|modules)/**/!(*spec|*tpl|*css|index).js': ['browserify']
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
            ['browserify-istanbul', 
             {
                instrumenter: require('isparta'),
                instrumenterConfig: {
                    embedSource: true
                },
                ignore: ['**/node_modules/**', '**/test/**', '**/src/scripts/mocks/**/*.js', '**/*_spec.js', '**/*_tpl.js', '**/*_css.js', '**/index.js', '**/src/scripts/settings/mocks.js']
             }
            ]
        ]
    },

    // web server port
    port: 9876,

    proxies: {
        '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    files: [
        { pattern: 'src/@(scripts|modules)/**/!(*tpl|*css|index).js', included: true },

        // third part resources
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
    karmaBaseConfig.logLevel = config.LOG_ERROR;
    const isCI = process.env.CI && Boolean(process.env.TRAVIS_PULL_REQUEST);
    config.set(isCI ? Object.assign(karmaBaseConfig, ciAdditions) : karmaBaseConfig);
};