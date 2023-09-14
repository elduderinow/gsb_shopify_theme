const gulp = require("gulp");
const babel = require('gulp-babel');
const glob = require("glob");
const addSource = require("gulp-add-src");
const concat = require("gulp-concat");
const path = require("path");
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps');

const scriptsTasks = () => {
    return gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest("assets/"));
}

gulp.task('js', scriptsTasks)
module.exports = scriptsTasks