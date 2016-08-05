import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import handleErrors from '../util/handleErrors';
import autoprefixer from 'gulp-autoprefixer';
import uncss from 'gulp-uncss';
import csso from 'gulp-csso';
import folders from 'gulp-folders';
import cssToJs from 'gulp-css-to-js';
import rename from 'gulp-rename';
import strip from 'gulp-strip-css-comments';

var sass_settings =  {
    sourceComments: !prod,
    outputStyle: prod ? 'compressed' : 'nested',
    includePaths: config.styles.sassIncludePaths
};

gulp.task('generate:MainStyles', 'Create main app styles file', function () {

    const createSourcemap = !prod || config.styles.prodSourcemap;

    return gulp.src(config.styles.src)
         .pipe(gulpif(createSourcemap, sourcemaps.init()))
         .pipe(sass(sass_settings))
         .on('error', handleErrors)
         .pipe(gulpif(prod, strip( { 'preserve' : false })))
        .pipe(autoprefixer(config.styles.autoprefixer))
        .pipe(gulpif(createSourcemap, sourcemaps.write(prod ? './' : null)))
        .pipe(gulpif(prod, uncss({ html: [config.templates.src, config.templates.index, config.modules.templates]})))
        .pipe(gulpif(prod, csso()))
        .pipe(gulpif(prod, cachebust.references()))
        .pipe(gulpif(prod, cachebust.resources()))
         .pipe(gulp.dest(config.styles.dest));
    //     //.pipe( browserSync.stream() );
});
