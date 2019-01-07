const argv = require('yargs').argv;
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const plugins = gulpLoadPlugins({
    scope: ['devDependencies']
});

const options = {
    folder: argv.env ? argv.env : 'dist',
    pattern: ['gulp/**/*.js'],
    template: argv.template,
    server: {
        host: argv.host ? argv.host : '0.0.0.0',
        port: argv.port ? argv.port : '',
        devport: parseInt(argv.port ? argv.port : '2910') + 1
    },
    constants: {
        frontendPath: './'
    }
};

require('load-gulp-tasks')(gulp, options, plugins);