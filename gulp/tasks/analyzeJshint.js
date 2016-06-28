import config from '../config';
import gulp   from 'gulp';
import jshint from 'gulp-jshint';

gulp.task('analyze:Jshint', function() {
  return gulp.src(config.scripts.jshint)
    .pipe( jshint() )
    .pipe( jshint.reporter('jshint-stylish') );
});