export default {

    app:{
        name: 'Boilerplate'
    },

    browserPort: 3000,
    UIPort: 3001,
    testPort: 3002,

    sourceDir: './src/',
    buildDir: './dist/',
    tempDir: './temp/',
    destFiles: './dist/**/*',

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
        src: 'src/images/favicon/favicon.svg',
        dest: 'dist/images/favicons/',
        path: '/images/favicons/',
        data: 'faviconData.json'
    },

    styles: {
        dev: 'src/styles/',
        src: 'src/styles/**/*.scss',
        dest: 'dist/styles',
        icons: '_icons.scss',
        prodSourcemap: false,
        autoprefixer: ['last 5 version', '> 0.1%', 'ie 9'],
        sassIncludePaths: []
    },

    locale: {
        src: 'src/resources/locale/*.js',
        dest: 'dist/resources/locale'
    },

    translation: {
        src: 'src/resources/translation/*.json',
        dest: 'dist/resources/translation'
    },

    mocks: {
        src: 'src/resources/mocks/*.json',
        dest: 'dist/resources/mocks'
    },

    scripts: {
        dev: 'src/scripts/',
        index: 'app.js',
        src: 'src/scripts/**/*.js',
        dest: 'dist/scripts',
        files: '**/*.js',
        jshint: ['src/scripts/**/*.js', 'src/modules/**/*.js', '!src/modules/**/*_tpl.js', '!src/modules/**/*_spec.js', '!src/modules/**/*_css.js', '!src/scripts/**/*_tpl.js']
    },

    ngconstants: {
        tpl: 'tools/util/constant.tpl.ejs',
        name: 'constants.js',
        dest: 'src/scripts/settings'
    },

    iconsfont:{
        name: 'icons',
        template: 'tools/util/iconsfont.css',
        src:  'src/images/icons/**/*.svg',
        dest: 'src/fonts'
    },

    images: {
        dir: 'src/images/',
        src: ['src/images/**/*.png', 'src/images/**/*.jpg', 'src/images/**/*.gif', 'src/images/**/*.svg', '!src/images/icons/*', '!src/images/favicon/*'],
        dest: 'dist/images'
    },

    fonts: {
        icons: 'src/fonts/icons*',
        src: ['src/fonts/*', '!src/fonts/icons*'],
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
        index: 'src/index.html',
        src: 'src/templates/**/*.htm*',
        dest: 'src/scripts/'
    },

    modules: {
        src: 'src/modules/',
        styles: 'src/modules/**/*.scss',
        templates: 'src/modules/**/*.htm*',
        scripts: 'src/modules/**/*.js',
        tests: '!src/modules/**/*_spec.js'
    },

    gzip: {
        src: 'dist/**/*.{html,xml,json,css,js,js.map,css.map}',
        dest: 'dist/',
        options: {}
    },

    info: {
        src: 'dist/**/*.*'
    },

    babel: {
        src: ['src/**/*.js', '!src/resources/**/*.js', '!src/**/*_css.js', '!src/**/*_tpl.js', '!src/**/*_spec.js', '!src/**/index.js'],
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
