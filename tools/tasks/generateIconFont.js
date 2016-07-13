import config              from '../config';
import changed          from 'gulp-changed';
import rename           from 'gulp-rename';
import gulp                 from 'gulp';
import iconfont           from 'gulp-iconfont';
import consolidate     from 'gulp-consolidate';
import browserSync   from 'browser-sync';

var runTimestamp = Math.round(Date.now()/1000);

gulp.task('generate:IconFont', function() {
    return gulp.src(config.iconsfont.src)
        .pipe( changed(config.iconsfont.dest) ) // Ignore unchanged files
        .pipe(iconfont({
            fontName: config.iconsfont.name,
            normalize: true,
            appendUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
            timestamp: runTimestamp, // recommended to get consistent builds when watching files
        }))
        .on('glyphs', function(glyphs, options) {
            gulp.src(config.iconsfont.template)
                .pipe(consolidate('lodash', {
                    glyphs: glyphs,
                    fontName: config.iconsfont.name,
                    fontPath: '../fonts/',
                    className: 'icon'
                }))
                .pipe(rename('_icons.scss'))
                .pipe(gulp.dest('src/css/'));
        })
        .pipe(gulp.dest(config.iconsfont.dest))
        .pipe(browserSync.stream());
});
