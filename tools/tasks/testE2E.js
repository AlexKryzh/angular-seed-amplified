import testServer    from '../util/testServer';
import express        from 'express';
import {
    protractor,
    webdriver_update,
    webdriver
} from 'gulp-protractor';

gulp.task('update:Webdriver', 'Description', webdriver_update);

gulp.task('launch:Webdriver', 'Description', ['update:Webdriver'], webdriver);

gulp.task('test:E2E', 'Description', ['launch:Webdriver'], function(cb) {

    const testFiles = gulp.src('test/e2e/**/*_spec.js');

    testServer({
        port: config.testPort,
        dir: config.buildDir
    }).then((server) => {
        testFiles.pipe(protractor({
            configFile: config.test.protractor
        })).on('error', (err) => {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        }).on('end', () => server.close(cb));
    });

});