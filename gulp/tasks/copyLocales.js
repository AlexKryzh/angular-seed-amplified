import config                      from '../config';
import gulp                         from 'gulp';
import browserSync           from 'browser-sync';
import setEnvironment       from '../util/setEnvironment';
import rename                   from 'gulp-rename';
import streamify                from 'gulp-streamify';
import uglify                      from 'gulp-uglify';

setEnvironment();

// Views task
gulp.task('copy:Locales', function() {

    var constants = config.constants;

    return gulp.src(config.locale.src)
        .pipe( production(streamify(uglify({
            compress: { drop_console: true }
        }))) )
        .pipe( production(rename(function (path) {
            path.basename += '.' + constants.cache_buster;
            path.extname = '.js'
        })) )
        .pipe( gulp.dest(config.locale.dest) )
        .pipe( browserSync.stream() );
});
