import rename from 'gulp-rename';
import streamify from 'gulp-streamify';
import uglify from 'gulp-uglify';

gulp.task('copy:Locales', 'Copy location format files', function() {

    var constants = config.constants;

    return gulp.src(config.locale.src)
        .pipe(gulpif(prod, streamify(uglify({compress: { drop_console: true }}))))
        .pipe(gulpif(prod, rename(function (path) {
            path.basename += '.' + constants.cache_buster;
            path.extname = '.js';
        })))
        .pipe(gulp.dest(config.locale.dest));
        //.pipe( browserSync.stream() );
});
