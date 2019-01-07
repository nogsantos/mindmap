const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge-stream');

const pump = require('pump');
const uglifyjs = require('uglify-es');
const composer = require('gulp-uglify/composer');
const minify = composer(uglifyjs, console);

/**
 * Build javascript files in a bundle file
 *
 * Docs:
 * https://www.npmjs.com/package/uglify-es
 */
module.exports = (gulp, options, plugins) => {

    const appJs = [
        'src/scripts/old/kineticjs.js',
        'src/scripts/old/jquery.cookie.min.js',
        'src/scripts/old/difflib.js',
        'src/scripts/old/mindmap.min.js',
        'src/scripts/unsaved_changes.js',
        'src/scripts/settings.js',
        'src/scripts/document_title.js',
        'src/scripts/file_import.js',
        'src/scripts/file_export.js',
        'src/scripts/app_functions.js',
        'src/scripts/navbar.js',
        'src/scripts/modal.js',
        'src/scripts/pane_resizer.js',
        'src/scripts/shortcuts.js',
        'src/scripts/main.js'
    ];

    gulp.task('js:min', () => {
        return merge(
            gulp
                .src(appJs)
                .pipe(plugins.concat('app.min.js'))
                .pipe(plugins.rev())
                .pipe(gulp.dest('dist/js'))
        );
    });

    gulp.task('compress', cb => {
        const options = {
            ecma: 6
        };
        pump([gulp.src('dist/js/app-*.js'), minify(options), gulp.dest('dist/js')], cb);
    });

    gulp.task('js:dev', () => {
        return merge(
            gulp
                .src(appJs)
                .pipe(sourcemaps.init())
                .pipe(plugins.concat('app.min.js'))
                .pipe(sourcemaps.write('./source'))
                .pipe(gulp.dest('dev/js'))
        );
    });

    gulp.task('js', callback => {
        const jstask = !options.folder || options.folder === 'dist' ? ['js:min', 'compress'] : ['js:dev'];
        runSequence(...jstask, callback);
    });
};
