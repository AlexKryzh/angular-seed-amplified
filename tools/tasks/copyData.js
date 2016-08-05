import rename from 'gulp-rename';
import jsonlint from 'gulp-jsonlint';
import jsonminify from 'gulp-jsonminify';

gulp.task('copy:Data', 'Copy api fake data', function() {

    var constants = config.constants;

    return gulp.src(config.data.src)
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(gulpif(prod, jsonminify()))
        // .pipe( production(rename(function (path) {
        //     path.basename += '.' + constants.cache_buster;
        //     path.extname = '.json'
        // })) )
        .pipe(gulp.dest(config.data.dest))
        //.pipe(browserSync.stream());

});
