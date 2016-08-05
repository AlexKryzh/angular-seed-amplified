import changed from 'gulp-changed';

gulp.task('copy:Fonts', 'Copy fonts to dist folder', function() {
    return gulp.src(config.fonts.src)
        .pipe(changed(config.fonts.dest))
        .pipe(gulpif(prod, cachebust.resources()))
        .pipe(gulp.dest(config.fonts.dest))
        //.pipe(browserSync.stream());
});