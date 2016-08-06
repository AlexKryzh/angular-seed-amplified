import ngConstant from 'gulp-ng-constant';
import rename from 'gulp-rename';
import replace from 'gulp-replace';

gulp.task('generate:ConstantModule', 'Create constants module', function() {

    if(prod){
        var environment = 'production';
    }else{
        var environment = 'development';
    }

    var constants = config.constants;
    if(prod){
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
    .pipe(gulpif(mocks, replace('mocks: false', 'mocks: true')))
    .pipe(gulpif(!mocks, replace('mocks: true', 'mocks: false')))
    .pipe(rename(config.ngconstants.name))
    .pipe(gulp.dest(config.ngconstants.dest));
  
});