import gulpif                       from 'gulp-if';
import sourcemaps             from 'gulp-sourcemaps';
import sass                         from 'gulp-sass';
import handleErrors            from '../util/handleErrors';
import setEnvironment       from '../util/setEnvironment';
import browserSync           from 'browser-sync';
import autoprefixer             from 'gulp-autoprefixer';
import uncss                      from 'gulp-uncss';
import csso                        from 'gulp-csso';
import folders                     from 'gulp-folders';
import cssToJs                  from 'gulp-css-to-js';
import rename                   from 'gulp-rename';
import strip                        from 'gulp-strip-css-comments';

setEnvironment();

var sass_settings =  {
    sourceComments: development(),
    outputStyle: production() ? 'compressed' : 'nested',
    includePaths: config.styles.sassIncludePaths
};

gulp.task('generate:MainStyles', 'Description', function () {

    const createSourcemap = development() || config.styles.prodSourcemap;

    return gulp.src(config.styles.src)
        .pipe( gulpif(createSourcemap, sourcemaps.init()) )
        .pipe( sass(sass_settings) )
        .on( 'error', handleErrors )
        .pipe( production(strip( { 'preserve' : false })) )
        .pipe( autoprefixer(config.styles.autoprefixer) )
        .pipe( gulpif(createSourcemap, sourcemaps.write( production() ? './' : null )) )
        .pipe( production(uncss({ html: [config.templates.src, config.templates.index, config.modules.templates]})) )
        .pipe( production(csso()) )
        .pipe( production(global.cachebust.references()) )
        .pipe( production(global.cachebust.resources()) )
        .pipe( gulp.dest(config.styles.dest) )
        .pipe( browserSync.stream() );
});
