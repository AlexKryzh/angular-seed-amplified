import config               from '../config';
import gulp                 from 'gulp';
import browserSync          from 'browser-sync';
import gulpif               from 'gulp-if';
import jsonlint             from 'gulp-jsonlint';

// Views task
gulp.task('copy:Mocks', function() {

    return gulp.src(config.mocks.src)
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(gulp.dest(config.mocks.dest))
        .pipe(browserSync.stream());

});
