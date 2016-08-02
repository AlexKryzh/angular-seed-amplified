import gulp                           from 'gulp';
import runSequence            from 'run-sequence';
import evironments              from 'gulp-environments';

gulp.task('prod', ['delete:Files'], function(cb) {

    cb = cb || function() {};

    global.production = environments.production;
    global.development = environments.development;

    environments.current(production);

    runSequence(
        [
            'generate:IconFont',
            'generate:Favicons'
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

});
