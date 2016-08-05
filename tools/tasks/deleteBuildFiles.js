import del from 'del';
gulp.task('delete:Files', 'Delete dist files generated files', function() {

    return del([config.buildDir, config.modules.src + '*_tpl.js', config.modules.src + '*_css.js', config.scripts.dev + '*_tpl.js']);
});
