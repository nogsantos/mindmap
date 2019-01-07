const runSequence = require('run-sequence');
const ghpages = require('gh-pages');

/**
 * Copy images to work dir
 */
module.exports = (gulp, options, plugins) => {
    gulp.task('dist:page', () => {
        return ghpages.publish('./dist', {
            branch: 'gh-pages',
            repo: 'git@github.com:nogsantos/fork-text2mindmap.git'
        }, {})
    });

    gulp.task('gh-pages', callback => {
        runSequence('dist:page', callback);
    });
};
