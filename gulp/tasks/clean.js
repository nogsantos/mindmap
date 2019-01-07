const rimraf = require('rimraf');

/**
 * Remove pack dirs before build a new one
 */
module.exports = (gulp, options, plugins) => {
    gulp.task('clean', callback => {
        rimraf.sync('dist');
        rimraf.sync('dev');
        callback(null);
    });
};
