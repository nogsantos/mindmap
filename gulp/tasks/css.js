const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');
const merge = require('merge-stream');

/**
 * Build css and sass files in a bundle file
 *
 * Docs:
 * - https://github.com/dlmanning/gulp-sass
 */
module.exports = (gulp, options, plugins) => {
	const appCss = [
		'src/styles/old/customstyles.css',
		'src/styles/old/jquery-ui-1.10.3.custom.min.css',
		'src/styles/app.css',
		'src/styles/navbar.css',
		'src/styles/modal.css',
		'src/styles/document_title.css',
		'src/styles/editor.css',
		'src/styles/viewer.css',
		'src/styles/pane_resizer.css',
		'src/**/*.scss'
	];

	gulp.task('css:min', () => {
		return merge(
			gulp
				.src(appCss)
				.pipe(sass().on('error', sass.logError))
				.pipe(plugins.cssmin())
				.pipe(plugins.concat('app.min.css'))
				.pipe(plugins.rev())
				.pipe(gulp.dest('dist/css'))
		);
	});

	gulp.task('css:dev', () => {
		const m = merge(
			gulp
				.src(appCss)
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(plugins.cssmin())
				.pipe(plugins.concat('style.min.css'))
				.pipe(minify())
				.pipe(sourcemaps.write('./source'))
				.pipe(gulp.dest('dev/css'))
		);
		return m;
	});

	gulp.task('css', callback => {
		const csstask = !options.folder || options.folder === 'dist' ? 'css:min' : 'css:dev';
		runSequence(csstask, callback);
	});
};
