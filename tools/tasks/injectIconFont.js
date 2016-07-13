import config              from '../config';
import changed          from 'gulp-changed';
import gulp                 from 'gulp';
import rename            from 'gulp-rename';
import browserSync   from 'browser-sync';
import inlineFonts      from 'gulp-inline-fonts';

gulp.task('inject:IconFont', function() {
    return gulp.src(config.fonts.icons)
        .pipe(inlineFonts({
          name: 'icons',
          style: 'normal',
          weight: 'normal',
          formats: ['woff', 'ttf', 'eot']
        }))
        .pipe(rename('_fonts.scss'))
        .pipe(gulp.dest(config.styles.dev));
});