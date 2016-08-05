import runSequence from 'run-sequence';

gulp.task('mocks', 'Activate mocks', function(cb) {

    global.mocks = true;

    runSequence(['copy:Mocks'], 'dev', cb);

});