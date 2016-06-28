import config                     from '../config';
import gulp                        from 'gulp';
import gulpif                      from 'gulp-if';
import gutil                        from 'gulp-util';
import source                    from 'vinyl-source-stream';
import sourcemaps           from 'gulp-sourcemaps';
import buffer                     from 'vinyl-buffer';
import streamify                from 'gulp-streamify';
import watchify                  from 'watchify';
import browserify               from 'browserify';
import babelify                   from 'babelify';
import uglify                       from 'gulp-uglify';
import handleErrors           from '../util/handleErrors';
import setEnvironment       from '../util/setEnvironment';
import browserSync           from 'browser-sync';
import ngAnnotate             from 'browserify-ngannotate';
import rename                   from 'gulp-rename';
import folders                    from 'gulp-folders';


setEnvironment();

function createSourcemap() {
    return development() || config.browserify.prodSourcemap;
}

function buildScript(file) {
    let bundler = browserify({
        entries: [config.sourceDir + 'js/' + file],
        debug: createSourcemap(),
        cache: {},
        packageCache: {},
        fullPaths: development()
    });

    if (development()) {
        bundler = watchify(bundler);
        bundler.on('update', function() {
            rebundle();
            gutil.log('Rebundle...');
        });
    }

    const transforms = [
        { 'name':babelify, 'options': {}},
        { 'name':ngAnnotate, 'options': {}},
        { 'name':'brfs', 'options': {}},
        { 'name':'bulkify', 'options': {}}
    ];

    transforms.forEach(function(transform) {
        bundler.transform(transform.name, transform.options);
    });

    function rebundle() {
        const stream = bundler.bundle();
        const sourceMapLocation = production() ? './' : '';

        return stream.on('error', handleErrors)
            .pipe( source(file) )
            .pipe( gulpif(createSourcemap(), buffer()) )
            .pipe( gulpif(createSourcemap(), sourcemaps.init({ loadMaps: true })) )
            .pipe( production(streamify(uglify({
                compress: { drop_console: true }
            }))) )
            .pipe( gulpif(createSourcemap(), sourcemaps.write(sourceMapLocation)) )
            .pipe( rename({dirname: ''}) )
            .pipe( production(global.cachebust.resources()) )
            .pipe( gulp.dest(config.scripts.dest) )
            .pipe( browserSync.stream() );
    }

    return rebundle();

}

gulp.task('browserify:Modules', folders(config.modules.src, function(module){
    return buildScript(module + '.js');
}));

gulp.task('browserify:Main', function() {
    return buildScript('app.js');
});