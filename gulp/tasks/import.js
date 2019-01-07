const runSequence = require('run-sequence');
const merge = require('merge-stream');
const htmlmin = require('gulp-htmlmin');

/**
 * Import files address on index replacing
 *  TAGS:
 *      <!-- inject:css --><!-- endinject -->
 *      <!-- inject:js --><!-- endinject -->
 */
module.exports = (gulp, options, plugins) => {

	const devCss = [
		'dev/css/*.css'
	];

	const devJs = [
		'dev/js/*.js'
	];

    const css = [
		'dist/css/*.css'
	];

	const js = [
		'dist/js/*.js'
	];

	const indexFiles = ['src/index.html'];

	gulp.task('import:dist', () => {
		return gulp
            .src(indexFiles)
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(plugins.inject(gulp.src(css, { read: false })))
			.pipe(plugins.inject(gulp.src(js, { read: false })))
			.pipe(plugins.injectString.replace('/dist/', './'))
			.pipe(plugins.injectString.replace('.css">', '.css" />'))
			.pipe(plugins.injectString.replace('<style type="text.css" />', '<style type="text/css" >'))
			.pipe(gulp.dest(options.folder));
	});

	gulp.task('import:dev', () => {
		return gulp
            .src(indexFiles)
            .pipe(plugins.inject(gulp.src(devCss, { read: false })))
			.pipe(plugins.inject(gulp.src(devJs, { read: false })))
			.pipe(plugins.injectString.replace('/dev/', './'))
			.pipe(plugins.injectString.replace('.css">', '.css" />'))
			.pipe(plugins.injectString.replace('<style type="text.css" />', '<style type="text/css" >'))
			.pipe(gulp.dest(options.folder));
	});

	gulp.task('import', callback => {
		const importTasks = !options.folder || options.folder === 'dist' ? 'import:dist' : 'import:dev';
        runSequence(importTasks, callback);
	});
};