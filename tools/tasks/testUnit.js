import path from 'path';
import {Server} from 'karma';

gulp.task('test:Unit', 'Launch Unit Test', function(cb) {

    new Server({
        configFile: path.resolve(__dirname, '../..', config.test.karma),
        singleRun: true
    }, cb).start();

    //We need find the way to get exact url of coverage
    //before we can open it in browser
    //open:TestCoverage

});