export default {

    app:{
        name: 'Boilerplate'
    },

    browserPort: 3000,
    UIPort: 3001,

    sourceDir: './app/',
    buildDir: './build/',
    tempDir: './temp/',

    environment: {
        development: {
            development: true,
            mocks: false,
            apiUrl: '/api/v1'
        },
        production: {
            development: false,
            mocks: false,
            apiUrl: '/api/v2'
        }
    },

    constants: {
        'cache_buster': '',
        'localizations': [
            {
                code: 'es_es',
                name: 'Español'
            },
            {
                code: 'en_us',
                name: 'English',
                locale: '/resources/locale/en-us.js'
            }
        ],
        'defaultLocalization': 'en_us'
    },

    favicons: {
        src: 'app/images/favicon/favicon.svg',
        dest: 'build/images/favicons/',
        path: '/images/favicons/',
        data: 'faviconData.json'
    },

    styles: {
        dev: 'app/css/',
        src: 'app/css/**/*.scss',
        dest: 'build/css',
        prodSourcemap: false,
        autoprefixer: ['last 5 version', '> 0.1%', 'ie 9'],
        sassIncludePaths: []
    },

    locale: {
        src: 'app/resources/locale/*.js',
        dest: 'build/resources/locale'
    },

    translation: {
        src: 'app/resources/translation/*.json',
        dest: 'build/resources/translation'
    },

    mocks: {
        src: 'app/resources/mocks/*.json',
        dest: 'build/resources/mocks'
    },

    scripts: {
        dev: 'app/js/',
        index: 'app.js',
        src: 'app/js/**/*.js',
        dest: 'build/js',
        files: '**/*.js',
        jshint: ['app/js/**/*.js', 'app/modules/**/*.js', '!app/modules/**/*_tpl.js', '!app/modules/**/*_spec.js', '!app/modules/**/*_css.js', '!app/js/**/*_tpl.js']
    },

    ngconstants: {
        tpl: 'gulp/util/constant.tpl.ejs',
        name: 'constants.js',
        dest: 'app/js/settings'
    },

    iconsfont:{
        name: 'icons',
        template: 'gulp/util/iconsfont.css',
        src:  'app/images/icons/**/*.svg',
        dest: 'app/fonts'
    },

    sprite: {
        src: 'app/images/sprite/**/*.svg',
        file: 'sprite.svg',
        path: '../images/',
        template: 'app/templates/partials/sprite.html',
        templateDir: 'app/templates/partials/'
    },

    images: {
        dir: 'app/images/',
        src: ['app/images/**/*.png', 'app/images/**/*.jpg', 'app/images/**/*.gif', 'app/images/**/*.svg', '!app/images/sprite/*', '!app/images/icons/*', '!app/images/favicon/*'],
        dest: 'build/images'
    },

    fonts: {
        icons: 'app/fonts/icons*',
        src: ['app/fonts/*', '!app/fonts/icons*'],
        dest: 'build/fonts'
    },

    assetExtensions: [
        'js',
        'json',
        'css',
        'png',
        'jpe?g',
        'gif',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff',
        'woff2?'
    ],

    templates: {
        index: 'app/index.html',
        src: 'app/templates/**/*.htm*',
        dest: 'app/js/'
    },

    modules: {
        src: 'app/modules/',
        styles: 'app/modules/**/*.scss',
        templates: 'app/modules/**/*.htm*',
        scripts: 'app/modules/**/*.js',
        tests: '!app/modules/**/*_spec.js'
    },

    gzip: {
        src: 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
        dest: 'build/',
        options: {}
    },

    info: {
        src: 'build/**/*.*'
    },

    babel: {
        src: ['app/**/*.js', '!app/resources/**/*.js', '!app/**/*_css.js', '!app/**/*_tpl.js', '!app/**/*_spec.js', '!app/**/index.js'],
        dest: 'temp_babel'
    },

    reports: {
        analysis: {
            dest: 'reports/analysis',
            index: 'reports/analysis/index.html'
        },
        coverage: {
            index: 'reports/coverage/*/index.html'
        }
    },

    browserify: {
        bundleName: 'app.js',
        prodSourcemap: false
    },

    test: {
        karma: 'test/karma.conf.js',
        protractor: 'test/protractor.conf.js'
    },

    init: function() {
        this.templates.watch = [
            this.templates.index,
            this.templates.src
        ];

        return this;
    }
    
}.init();
