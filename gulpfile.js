// See: http://gulpjs.com/

var gulp = require('gulp');
var argv = require('yargs').argv;
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var csso = require('csso-stylus');

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

gulp.task('stylus', function () {
    return gulp
        .src('./feedbacks/static/styl/dj-feedback.styl')
        .pipe(stylus({
            use: [
                autoprefixer({
                    browsers: ['last 2 versions', 'ie >= 8'],
                    cascade: false,
                }),
                csso(),
            ],
        }))
        .pipe(gulp.dest('./feedbacks/static/built'));
});

gulp.task('watch', function () {
    gulp.watch(['./feedbacks/static/styl/*.styl'], ['stylus']);
});

gulp.task('default', ['lint']);
