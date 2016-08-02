import config                     from '../config';
import gulp                        from 'gulp';
import browserSync           from 'browser-sync';
import htmlhint                   from 'gulp-htmlhint';
import htmlmin                   from 'gulp-htmlmin';
import setEnvironment       from '../util/setEnvironment';
import realFavicon             from 'gulp-real-favicon';
import fs                             from 'fs';

setEnvironment();

gulp.task('copy:MainIndex', function() {
    return gulp.src(config.templates.index)
        //.pipe( production(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(config.favicons.data)).favicon.html_code)))
        .pipe( htmlhint('.htmlhintrc') )
        .pipe( htmlhint.reporter() )
        .pipe( production(global.cachebust.references()) )
        .pipe( production(htmlmin({collapseWhitespace: true})) )
        .pipe( gulp.dest(config.buildDir) );
});