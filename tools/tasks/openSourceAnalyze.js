import open             from 'gulp-open';
import del                from 'del';

gulp.task('open:SourceAnalyze', 'Open in browser source analyze report', function() {

    del(config.babel.dest);

    return gulp.src(
            config.reports.analysis.index
        )
        .pipe(
            open()
        );

});
