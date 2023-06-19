const gulp = require("gulp");
const babel = require('gulp-babel');
const glob = require("glob");
const addSource = require("gulp-add-src");
const concat = require("gulp-concat");
const path = require("path");
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('gulp-browserify')

// get an array of files
const files = glob.sync("src/js/*.js");

const scriptsTasks = () => {
    return gulp.src('src/js/*.js')
        .pipe(browserify({ debug: true }))
        .pipe(uglify())
        .pipe(gulp.dest("assets/"));
}

gulp.task('js', scriptsTasks)
module.exports = scriptsTasks