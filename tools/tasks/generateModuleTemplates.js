import templateCache from 'gulp-angular-templatecache';
import folders from 'gulp-folders';
import htmlhint from 'gulp-htmlhint';
import htmlmin from 'gulp-htmlmin';

gulp.task('generate:ModuleTemplates', 'Create module templates', folders(config.modules.src, function(module){
    return gulp.src(config.modules.src + module + '/*.htm*')
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
        .pipe(gulpif(prod, htmlmin({collapseWhitespace: true})))
        .pipe(templateCache({
            standalone: true,
            filename: module + '_tpl.js',
            module: module + '.templates',
            moduleSystem: 'Browserify'
        }))
        .pipe(gulp.dest(config.modules.src + module))
        //.pipe(browserSync.stream());
}));