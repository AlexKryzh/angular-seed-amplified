import config               from '../config';
import url                     from 'url';
import gulp                  from 'gulp';

gulp.task('server', function() {

    const DEFAULT_FILE = 'index.html';
    const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

    global.browserSync.init({
        server: {
            baseDir: config.buildDir,
            middleware: function(req, res, next) {
                let fileHref = url.parse(req.url).href;

                if ( !ASSET_EXTENSION_REGEX.test(fileHref) ) {
                  req.url = '/' + DEFAULT_FILE;
                }

                return next();
            }
        },
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        open: 'ui',
        ghostMode: {
            links: false
        }
    });

});
