import runSequence from 'run-sequence';

gulp.task('test', 'Launch unit and functional tests', function(cb) {

    cb = cb || function() {};
    return runSequence('test:Unit', 'test:E2E', cb);

});