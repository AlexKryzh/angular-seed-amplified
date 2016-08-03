import runSequence     from 'run-sequence';

gulp.task('mocks', 'Description', function(cb) {

    global.mocks = true;

    runSequence(['copy:Mocks'], 'dev', cb);

});