import config    from '../config';
import gulp       from 'gulp';

gulp.task('watch:Files', ['server'], function() {

    global.isWatching = true;

    // Scripts are automatically watched and rebundled by Watchify inside Browserify task
    gulp.watch(config.scripts.src, ['analyze:Jshint']);
    gulp.watch(config.modules.scripts, ['analyze:Jshint', 'browserify:Modules']);
    gulp.watch(config.locale.src, ['copy:Locales']);
    gulp.watch(config.translation.src, ['copy:Translations']);
    gulp.watch(config.mocks.src, ['copy:Mocks']);
    gulp.watch(config.styles.src,  ['generate:MainStyles']);
    gulp.watch(config.modules.styles,  ['generate:ModuleStyles', 'browserify:Modules']);
    gulp.watch(config.images.src,  ['copy:Images']);
    gulp.watch(config.fonts.src,   ['copy:Fonts']);
    gulp.watch(config.iconsfont.src, ['generate:IconFont', 'inject:IconFont']);
    gulp.watch(config.templates.index, ['copy:MainIndex']);
    gulp.watch(config.templates.watch, ['generate:MainTemplates']);
    gulp.watch(config.modules.templates, ['generate:ModuleTemplates']);

    gulp.watch([config.destFiles]).on('change', global.browserSync.reload);

});