import templateCache from 'gulp-angular-templatecache';
import folders from 'gulp-folders';
import htmlhint from 'gulp-htmlhint';
import htmlmin from 'gulp-htmlmin';

gulp.task('generate:MainTemplates', 'Create main templates module', function() {
    return gulp.src(config.templates.src)
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
        .pipe(gulpif(prod, htmlmin({collapseWhitespace: true})))
        .pipe(templateCache({
            standalone: true,
            filename: 'app_tpl.js',
            module: 'app.templates',
            moduleSystem: 'Browserify'
        }))
        .pipe(gulp.dest(config.templates.dest))
        //.pipe(browserSync.stream());
});