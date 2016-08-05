import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';

gulp.task('copy:Images', 'Copy images to dist folder', function() {

  return gulp.src(config.images.src)
    .pipe( changed(config.images.dest) ) // Ignore unchanged files
    .pipe(gulpif(prod, imagemin()))
    .pipe(gulpif(prod, cachebust.resources()))
    .pipe(gulp.dest(config.images.dest));
    //.pipe( browserSync.stream() );

});
