// See: http://gulpjs.com/

var gulp = require('gulp');
var argv = require('yargs').argv;
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var csso = require('csso-stylus');

var amdOptimize = require('gulp-amd-optimizer');
var concat = require('gulp-concat-sourcemap');
var requireConfig = {
    baseUrl: './'
};
var options = {
    umd: false
};
gulp.task('amd', function () {
    return gulp.src(
        'feedbacks/static/feedbacks/js/common.js',
        {
            base: requireConfig.baseUrl
        }
    )
    .pipe(amdOptimize(requireConfig, options))
    .pipe(concat('modules.js'))
    .pipe(gulp.dest('dist'));
});;

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
                './feedbacks/static/feedbacks/js/**/*.js',
                './gulpfile.js',
            ]
        )
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jscs());
});

gulp.task('stylus', function () {
    return gulp
        .src('./feedbacks/static/feedbacks/styl/dj-feedback.styl')
        .pipe(stylus({
            use: [
                autoprefixer({
                    browsers: ['last 2 versions', 'ie >= 8'],
                    cascade: false,
                }),
                csso(),
            ],
        }))
        .pipe(gulp.dest('./feedbacks/static/feedbacks/built'));
});

gulp.task('watch', function () {
    gulp.watch(['./feedbacks/static/feedbacks/styl/*.styl'], ['stylus']);
});

gulp.task('default', ['lint']);
