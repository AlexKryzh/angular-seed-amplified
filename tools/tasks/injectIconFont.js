import changed          from 'gulp-changed';
import rename            from 'gulp-rename';
import browserSync   from 'browser-sync';
import inlineFonts      from 'gulp-inline-fonts';

gulp.task('inject:IconFont', 'Description', function() {
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