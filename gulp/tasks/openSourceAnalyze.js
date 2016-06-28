import config           from '../config';
import gulp              from 'gulp';
import open             from 'gulp-open';
import del                from 'del';

gulp.task('open:SourceAnalyze', function() {

    del(config.babel.dest);

    return gulp.src(
            config.reports.analysis.index
        )
        .pipe(
            open()
        );

});
