import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('test', function(cb) {

    cb = cb || function() {};
    return runSequence('test:Unit', 'test:Functional', cb);

});