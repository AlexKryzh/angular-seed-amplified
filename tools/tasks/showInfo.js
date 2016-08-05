import size from 'gulp-filesize';

gulp.task('show:Info', 'Show files sizes', function() {
    return gulp.src(config.info.src)
        .pipe(size());
});
