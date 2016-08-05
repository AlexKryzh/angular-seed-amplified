import jshint from 'gulp-jshint';

gulp.task('analyze:Jshint', 'Code Analysis Task for JavaScript', function() {
    return gulp.src(config.scripts.jshint)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});