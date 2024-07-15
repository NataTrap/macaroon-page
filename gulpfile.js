'use strict'

const less = require('gulp-less');
const gulp = require('gulp')

exports.less = function () {
    return gulp.src('./src/css/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'));
}

exports.watch = function () {
    gulp.watch('./src/css/*.less', gulp.series('less'));
}
