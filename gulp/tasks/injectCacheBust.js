import config                      from '../config';
import gulp                         from 'gulp';
import setEnvironment       from '../util/setEnvironment';

setEnvironment();

gulp.task('inject:CacheBust', function() {

    return gulp.src(config.scripts.dest + '/**/*.js')
        .pipe( production(global.cachebust.references()) )
        .pipe( gulp.dest(config.scripts.dest) );

});
