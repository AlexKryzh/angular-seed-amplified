import rename                   from 'gulp-rename';
import jsonlint                    from 'gulp-jsonlint';
import jsonminify               from 'gulp-jsonminify';

gulp.task('copy:Translations', 'Copy translations', function() {

    var constants = config.constants;

    return gulp.src(config.translation.src)
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(gulpif(prod, jsonminify()))
        .pipe(gulpif(prod, rename(function (path) {
            path.basename += '.' + constants.cache_buster;
            path.extname = '.json';
        })))
        .pipe(gulp.dest(config.translation.dest));
        //.pipe( browserSync.stream() );

});
