import config           from '../config';
import gulp              from 'gulp';
import plato             from 'gulp-plato';
import babel            from 'gulp-babel';

gulp.task('analyze:Plato', function() {

    return gulp.src(
            config.babel.src
        )
        .pipe(
            babel(
                {
                    presets: ['es2015']
                }
            )
        )
        .pipe(
            gulp.dest(
                config.babel.dest
                )
            )
        .pipe(
            plato(
                config.reports.analysis.dest
                )
            );

});