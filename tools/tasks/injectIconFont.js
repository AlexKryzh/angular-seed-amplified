import changed from 'gulp-changed';
import rename from 'gulp-rename';
import inlineFonts from 'gulp-inline-fonts';

gulp.task('inject:IconFont', 'Create icons stylesheet with inline font', function() {
    return gulp.src(config.fonts.icons)
        .pipe(inlineFonts({
          name: 'icons',
          style: 'normal',
          weight: 'normal',
          formats: ['woff']
        }))
        .pipe(rename('_fonts.scss'))
        .pipe(gulp.dest(config.styles.dev));
});