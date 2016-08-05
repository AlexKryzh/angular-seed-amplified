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

gulp.task('generate:ModuleStyles', 'Create module styles', folders(config.modules.src, function(module){

    const createSourcemap = !prod || config.styles.prodSourcemap;

    return gulp.src( config.modules.src + module + '/*.scss*' )
        .pipe(gulpif(createSourcemap, sourcemaps.init()))
        .pipe(sass(sass_settings))
        .on('error', handleErrors)
        .pipe(autoprefixer(config.styles.autoprefixer))
        .pipe(gulpif(createSourcemap, sourcemaps.write(prod ? './':null)))
        .pipe(gulpif(prod, csso()))
        .pipe(gulpif(prod, strip({'preserve' : false})))
        .pipe(cssToJs())
        .pipe(rename(module + '_css.js'))
        .pipe(gulp.dest(config.modules.src + module));
        //.pipe( browserSync.stream() );
}));
