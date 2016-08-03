import changed          from 'gulp-changed';
import browserSync   from 'browser-sync';

gulp.task('copy:Fonts', 'Description', function() {

    return gulp.src( config.fonts.src )
        .pipe( changed(config.fonts.dest) ) // Ignore unchanged files
        .pipe( production(global.cachebust.resources()) )
        .pipe( gulp.dest(config.fonts.dest) )
        .pipe( browserSync.stream() );
});