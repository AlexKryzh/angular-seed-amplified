import gulp                           from 'gulp';
import runSequence             from 'run-sequence';
import environments            from 'gulp-environments';

gulp.task('dev', ['delete:Files'], function(cb) {

    cb = cb || function() {};

    global.production = environments.production;
    global.development = environments.development;

    environments.current(development);

    runSequence(
        [
            'generate:IconFont'
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
            'copy:Translations'
        ], 
        [
            'copy:MainIndex'
        ],
        [
            'watch:Files'
        ], 
        cb
    );

});