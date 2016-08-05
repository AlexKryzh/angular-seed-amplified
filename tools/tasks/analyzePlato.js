import plato from 'gulp-plato';
import babel from 'gulp-babel';

//REPLACE gulp-plato(deprecated) with plato

gulp.task('analyze:Plato', 'JavaScript source code visualization, static analysis, and complexity', function() {

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