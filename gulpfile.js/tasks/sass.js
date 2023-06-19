'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const sassTask = () => {
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets'))
}

gulp.task('sass', sassTask)
module.exports = sassTask
