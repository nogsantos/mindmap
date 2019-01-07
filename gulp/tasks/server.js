const runSequence = require('run-sequence');

/**
 * Server for development or any else environment
 */
module.exports = (gulp, options, plugins) => {
    let time = '';

    const cors = (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    };

    gulp.task('server', callback => {
        time = '[' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + '] ';
        if (options.compileAll) {
            runSequence(['server:production', 'server:development'], callback);
        }
        if (!options.compileAll && options.folder === 'dist') {
            runSequence('server:production', callback);
        }
        if (!options.compileAll && options.folder === 'dev') {
            runSequence('server:development', callback);
        }
    });

    gulp.task('server:production', () => {
        console.log(`${time}INFO: Production Port: ${options.server.port}`);
        console.log(`${time}INFO: Hosting folder: ${options.folder}`);
        plugins.connect.server({
            port: options.server.port,
            root: options.folder,
            base: options.server.host,
            middleware: () => [cors]
        });
    });

    gulp.task('server:development', () => {
        if (options.server.port === '') {
            throw 'On development environment you need to input server port';
        }
        console.log(`${time}INFO: Development Port: ${options.server.devport}`);
        console.log(`${time}INFO: Hosting folder: ${options.folder}`);
        plugins.connect.server({
            port: options.server.devport,
            root: options.folder,
            host: options.server.host,
            middleware: () => [cors]
        });
    });
};