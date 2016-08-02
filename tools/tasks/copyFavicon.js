import config                      from '../config';
import changed                  from 'gulp-changed';
import gulp                         from 'gulp';
import browserSync           from 'browser-sync';

gulp.task('copy:Favicon', function() {

  return gulp.src(config.favicons.src)
    .pipe( changed(config.favicons.dest) )
    .pipe( gulp.dest(config.favicons.dest) )
    .pipe( browserSync.stream() );
});