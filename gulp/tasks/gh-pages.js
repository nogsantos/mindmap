const runSequence = require('run-sequence');
const ghpages = require('gh-pages');

/**
 * Copy images to work dir
 *
 * Docs:
 *  https://www.npmjs.com/package/gh-pages
 */
module.exports = (gulp, options, plugins) => {
    gulp.task('dist:page', () => {
        return ghpages.publish('./dist', {
            branch: 'gh-pages',
            repo: 'git@github.com:nogsantos/mindmap.git'
        }, {})
    });

    gulp.task('gh-pages', callback => {
        runSequence('dist:page', callback);
    });
};
