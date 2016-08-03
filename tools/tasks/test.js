import runSequence from 'run-sequence';

gulp.task('test', 'Description', function(cb) {

    cb = cb || function() {};
    return runSequence('test:Unit', 'test:E2E', cb);

});