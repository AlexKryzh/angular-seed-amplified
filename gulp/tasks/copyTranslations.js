import config                      from '../config';
import gulp                         from 'gulp';
import browserSync           from 'browser-sync';
import setEnvironment       from '../util/setEnvironment';
import rename                   from 'gulp-rename';
import jsonlint                    from 'gulp-jsonlint';
import jsonminify               from 'gulp-jsonminify';

setEnvironment();

gulp.task('copy:Translations', function() {

    var constants = config.constants;

    return gulp.src(config.translation.src)
        .pipe( jsonlint() )
        .pipe( jsonlint.reporter() )
        .pipe( production(jsonminify()) )
        .pipe( production(rename(function (path) {
            path.basename += '.' + constants.cache_buster;
            path.extname = '.json'
        })) )
        .pipe( gulp.dest(config.translation.dest) )
        .pipe( browserSync.stream() );

});
