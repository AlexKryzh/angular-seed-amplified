import htmlhint from 'gulp-htmlhint';
import htmlmin from 'gulp-htmlmin';
import realFavicon from 'gulp-real-favicon';
import fs from 'fs';

gulp.task('copy:MainIndex', 'Copy index.html file', function() {
    var favicons = prod ? JSON.parse(fs.readFileSync(config.favicons.data)).favicon.html_code : null;
    return gulp.src(config.templates.index)
        .pipe(gulpif(prod, realFavicon.injectFaviconMarkups(favicons)))
        .pipe( htmlhint('.htmlhintrc') )
        .pipe( htmlhint.reporter() )
        .pipe(gulpif(prod, cachebust.resources()))
        .pipe(gulpif(prod, htmlmin({collapseWhitespace: true})))
        .pipe( gulp.dest(config.buildDir) );
});