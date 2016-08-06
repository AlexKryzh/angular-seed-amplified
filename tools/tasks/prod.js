import runSequence from 'run-sequence';

gulp.task('prod', 'Create production distribution folder', ['delete:Files'], function(cb) {

    cb = cb || function() {};

    global.prod = true;

    runSequence(
        [
            'generate:IconFont',
            'create:Favicons',
            'copy:Mocks'
        ],
        [
            'copy:Images',
            'copy:Fonts',
            'inject:IconFont'
        ],
        [
            'generate:ConstantModule',
            'generate:MainStyles',
            'generate:ModuleStyles',
            'generate:ModuleTemplates',
            'generate:MainTemplates'
        ],
        [
            'browserify:Modules',
            'browserify:Main',
            'copy:Locales',
            'copy:Translations',
            'copy:Data'
        ],
        [
            'inject:CacheBust',
            'copy:MainIndex'
        ], 
        [
            'show:Info',
            'analyze:Plato'
        ],
        [
            'open:SourceAnalyze'
        ],
        cb
    );

}, {
    options: {
        'mocks': 'activate mocks'
    }
});
