import config           from '../config';
import gulp              from 'gulp';
import size              from 'gulp-filesize';

gulp.task('show:Info', function() {
    return gulp.src(config.info.src)
        .pipe(size());
});
