const merge = require('merge-stream');

/**
 * Copy images to work dir
 */
module.exports = (gulp, options, plugins) => {
    gulp.task('img', () => merge(gulp.src('./src/*.png').pipe(gulp.dest(options.folder + '/'))));
};
