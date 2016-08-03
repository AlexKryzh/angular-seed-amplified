import browserSync          from 'browser-sync';
import gulpif                      from 'gulp-if';
import jsonlint                   from 'gulp-jsonlint';

gulp.task('copy:Mocks', 'Description', function() {

    return gulp.src(config.mocks.src)
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(gulp.dest(config.mocks.dest))
        .pipe(browserSync.stream());

});
