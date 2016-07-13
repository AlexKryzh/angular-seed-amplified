import config                 from '../config';
import gulp                    from 'gulp';
import runSequence     from 'run-sequence';

gulp.task('mocks', function(cb) {

    global.mocks = true;

    runSequence(['copy:Mocks'], 'dev', cb);

});