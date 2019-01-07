const runSequence = require('run-sequence');

/**
 * Tasks to run when is on watch
 */
module.exports = (gulp, options, plugins) => {
    gulp.task('dev', callback => {
        runSequence('css', 'js', 'import', callback);
    });
};
