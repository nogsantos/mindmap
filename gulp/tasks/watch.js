const runSequence = require('run-sequence');

/**
 * Watch files for changes
 */
module.exports = (gulp, options, plugins) => {
    gulp.task('watch', () => {
        gulp.watch(['src/scripts/**/*.js'], () => runSequence('js:dev', 'dev'));
        gulp.watch(['src/styles/*.css'], () => runSequence('css', 'dev'));
        gulp.watch(['src/styles/*.scss'], () => runSequence('css', 'dev'));
        gulp.watch(['src/*.html'], () => runSequence('dev'));
    });
};
