import config              from '../config';
import changed          from 'gulp-changed';
import gulp                 from 'gulp';
import browserSync   from 'browser-sync';

gulp.task('copy:Fonts', function() {

    return gulp.src( config.fonts.src )
        .pipe( changed(config.fonts.dest) ) // Ignore unchanged files
        .pipe( production(global.cachebust.resources()) )
        .pipe( gulp.dest(config.fonts.dest) )
        .pipe( browserSync.stream() );
});