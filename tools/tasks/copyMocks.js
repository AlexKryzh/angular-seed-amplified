import jsonlint from 'gulp-jsonlint';

gulp.task('copy:Mocks', 'Copy mocks files', ['copy:MocksImages'], function() {

    if(mocks !== true){ return; }

    return gulp.src(config.mocks.src)
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(gulp.dest(config.mocks.dest))
        //.pipe(browserSync.stream());
});

gulp.task('copy:MocksImages', 'Copy images for mocks', function() {

    if(mocks !== true){ return; }

    return gulp.src(config.mocks.images.src)
        .pipe(gulp.dest(config.mocks.images.dest));

});