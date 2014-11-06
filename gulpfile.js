// See: http://gulpjs.com/

var gulp = require('gulp');
var argv = require('yargs').argv;
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

// Lint all modules:
// $ gulp lint
// Lint one module:
// $ gulp lint --src=foo
// $ gulp lint --src foo
gulp.task('lint', function () {
    var src = argv.src;
    return gulp
        .src(
            src ||
            [
                './feedbacks/static/js/**/*.js',
                './gulpfile.js',
            ]
        )
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jscs());
});

gulp.task('default', ['lint']);
