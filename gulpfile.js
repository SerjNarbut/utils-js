/**
 * Created by SerjN on 01.11.2016.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var Server = require('karma').Server;

gulp.task('concat', function () {
  return gulp.src('./src/*.js')
    .pipe(concat('utils.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('test', ['concat'], function () {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }).start();
});

gulp.task('default', ['test']);