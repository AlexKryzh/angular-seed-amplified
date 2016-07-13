import config           from '../config';
import gulp              from 'gulp';
import taskListing    from 'gulp-task-listing';

gulp.task('show:Tasks', taskListing);

gulp.task('default', ['show:Tasks']);