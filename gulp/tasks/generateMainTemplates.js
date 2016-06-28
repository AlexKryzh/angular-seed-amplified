import config                   from '../config';
import gulp                      from 'gulp';
import browserSync        from 'browser-sync';
import templateCache    from 'gulp-angular-templatecache';
import folders                  from 'gulp-folders';
import htmlhint                from 'gulp-htmlhint';
import htmlmin                from 'gulp-htmlmin';

// Views task
gulp.task('generate:MainTemplates', function() {

    // Process any other view files from app/views
    return gulp.src(config.templates.src)
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
        .pipe( production(htmlmin({collapseWhitespace: true})) )
        .pipe(templateCache({
            standalone: true,
            filename: 'app_tpl.js',
            module: 'app.templates',
            moduleSystem: 'Browserify'
        }))
        .pipe(gulp.dest(config.templates.dest))
        .pipe(browserSync.stream());
});