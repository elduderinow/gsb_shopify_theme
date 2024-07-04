const gulp = require('gulp');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss')

const tlwTask = () => {
    return gulp.src('src/css/application.css')
        .pipe(postcss([
            require('tailwindcss'),
            require('autoprefixer')
        ]))
        .pipe(purgecss({ content: ['**/*.liquid'] }))
        .pipe(gulp.dest('assets'));
}

gulp.task('tailwind', tlwTask)
module.exports = tlwTask