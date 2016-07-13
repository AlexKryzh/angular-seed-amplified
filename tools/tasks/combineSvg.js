import config           from '../config';
import gulp              from 'gulp';
import svgstore       from 'gulp-svgstore';
import inject            from 'gulp-inject';
import rename        from 'gulp-rename';
import svgmin         from 'gulp-svgmin';

gulp.task('combine:Svg', function () {
    var svgs = gulp
        .src(config.sprite.src)
        .pipe(svgstore({ inlineSvg: true }));

    function fileContents (filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src(config.sprite.template)
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest(config.sprite.templateDir));
});