import config                       from '../config';
import gulp                          from 'gulp';
import ngConstant              from 'gulp-ng-constant';
import setEnvironment       from '../util/setEnvironment';
import rename                    from 'gulp-rename';
import gulpif                       from 'gulp-if';
import replace                    from 'gulp-replace';

setEnvironment();

gulp.task('generate:ConstantModule', function() {

    if(production()){
        var environment = 'production';
    }else{
        var environment = 'development';
    }

    var constants = config.constants;
    if(production()){
        constants.cache_buster = Math.random().toString(16).slice(2);
    }

    for (var constant in config.environment[environment]){
        constants[constant] = config.environment[environment][constant];
    }

    return ngConstant({
        constants: constants,
        templatePath: config.ngconstants.tpl,
        stream: true
    })
    .pipe(gulpif(global.mocks, replace('mocks: false', 'mocks: true')))
    .pipe(gulpif(!global.mocks, replace('mocks: true', 'mocks: false')))
    .pipe(rename(config.ngconstants.name))
    .pipe(gulp.dest(config.ngconstants.dest));
  
});