import runSequence from 'run-sequence';

gulp.task('dev', 'Create development distribution', ['delete:Files'], function(cb) {

    cb = cb || function() {};

    global.prod = false;

    runSequence(
        [
            'generate:IconFont',
            'copy:Mocks'
        ],
        [
            'copy:Images',
            'copy:Favicon',
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
            'copy:MainIndex'
        ],
        [
            'watch:Files'
        ], 
        cb
    );

}, {
    options: {
        'mocks': 'activate mocks'
    }
});