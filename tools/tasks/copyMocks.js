import jsonlint                   from 'gulp-jsonlint';

gulp.task('copy:Mocks', 'Copy mocks files', function() {

    return gulp.src(config.mocks.src)
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(gulp.dest(config.mocks.dest))
        //.pipe(browserSync.stream());

});
