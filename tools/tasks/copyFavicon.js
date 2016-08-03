import changed                  from 'gulp-changed';
import browserSync           from 'browser-sync';

gulp.task('copy:Favicon', 'Description', function() {
  return gulp.src(config.favicons.dev)
    .pipe( changed(config.favicons.dest) )
    .pipe( gulp.dest(config.favicons.dest) )
    .pipe( browserSync.stream() );
});