import path              from 'path';
import {Server}        from 'karma';

gulp.task('test:Unit', 'Description', function(cb) {

    new Server({
        configFile: path.resolve(__dirname, '../..', config.test.karma),
        singleRun: true
    }, cb).start();

    //open:TestCoverage

});