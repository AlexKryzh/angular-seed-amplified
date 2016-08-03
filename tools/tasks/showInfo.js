import size              from 'gulp-filesize';

gulp.task('show:Info', 'Description', function() {
    return gulp.src(config.info.src)
        .pipe(size());
});
