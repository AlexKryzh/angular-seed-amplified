import fs                            from 'fs';
import config                     from './config';
import gulp                        from 'gulp';
import gulpHelp                from 'gulp-help';
import util                          from 'gulp-util';
import onlyScripts             from './util/scriptFilter';
import CacheBuster          from 'gulp-cachebust';

global.gulp = gulpHelp(gulp);

global.util = util;

global.config = config;

global.browserSync = require('browser-sync').create();

const tasks = fs.readdirSync('./tools/tasks/').filter(onlyScripts);

global.cachebust = new CacheBuster();

// Ensure process ends after all Gulp tasks are finished
gulp.on('stop', function () {
    if ( !global.isWatching ) {
        process.nextTick(function () {
            process.exit(0);
        });
    }
});

tasks.forEach((task) => {
    require('./tasks/' + task);
});