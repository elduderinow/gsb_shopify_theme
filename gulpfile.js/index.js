const gulp = require('gulp');
const sassTask = require('./tasks/sass')
const scriptsTasks = require('./tasks/scripts')
const tlwTask = require('./tasks/tailwind')


function defaultTask(cb) {
  gulp.watch('src/css/**/*.scss', gulp.series(sassTask))
  gulp.watch('src/js/*.js', gulp.series(scriptsTasks));
/*   gulp.watch('sections/*.liquid', gulp.series(tlwTask)); */
  cb();
}

exports.default = defaultTask