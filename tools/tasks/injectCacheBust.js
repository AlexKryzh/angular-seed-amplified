gulp.task('inject:CacheBust', 'Inject CacheBust', function() {

    return gulp.src(config.scripts.dest + '/**/*.js')
        .pipe(gulpif(prod, cachebust.references()))
        .pipe(gulp.dest(config.scripts.dest));

});
