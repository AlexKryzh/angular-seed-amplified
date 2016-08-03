import setEnvironment       from '../util/setEnvironment';

setEnvironment();

gulp.task('inject:CacheBust', 'Description', function() {

    return gulp.src(config.scripts.dest + '/**/*.js')
        .pipe( production(global.cachebust.references()) )
        .pipe( gulp.dest(config.scripts.dest) );

});
