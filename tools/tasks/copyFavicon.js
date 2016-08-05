import changed from 'gulp-changed';

gulp.task('copy:Favicon', 'Copy simple favicon just for dev environment', function() {
  return gulp.src(config.favicons.dev)
    .pipe(changed(config.favicons.dest))
    .pipe(gulp.dest(config.favicons.dest));
    //.pipe( browserSync.stream() );
});