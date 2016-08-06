import fs from 'fs';
import config from './config';
import gulp from 'gulp';
import gulpHelp from 'gulp-help';
import util from 'gulp-util';
import gulpif from 'gulp-if';
import onlyScripts from './util/scriptFilter';
import CacheBuster from 'gulp-cachebust';

//Set global variables
global.gulp = gulpHelp(gulp);
global.util = util;
global.prod = false;
global.gulpif = gulpif;
global.config = config;
global.browserSync = require('browser-sync').create();
global.cachebust = new CacheBuster();
global.mocks = util.env.mocks;

const tasks = fs.readdirSync('./tools/tasks/').filter(onlyScripts);

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