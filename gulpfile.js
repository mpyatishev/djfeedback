// See: http://gulpjs.com/

var gulp = require('gulp');
var argv = require('yargs').argv;
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var csso = require('csso-stylus');

var amdOptimize = require('gulp-amd-optimizer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var requireConfig = {
    "baseUrl": "./",
    "paths": {
        "dj-feedback": "feedbacks/static/feedbacks/js/dj-feedback",
        "jquery": 'bower_components/bower_components/jquery/dist/jquery',
        "jqueryCookie": 'bower_components/bower_components/jquery.cookie/jquery.cookie',
        "jqueryValidate": 'bower_components/bower_components/jquery-validation/dist/jquery.validate',
        "toggler": 'bower_components/bower_components/b-toggler/index'
    },
    "include": [
        "toggler",
        "dj-feedback"
    ],
    "exclude": [
        "jquery",
        "jqueryCookie",
        "jqueryValidate"
    ],
    "out": "feedbacks/static/feedbacks/built/dj-feedback.js"
};
var options = {
    umd: false
};
gulp.task('amd', function () {
    return gulp.src(
            'feedbacks/static/feedbacks/js/dj-feedback.js',
            {
                base: requireConfig.baseUrl
            }
        )
        .pipe(amdOptimize(requireConfig, options))
        .pipe(concat('dj-feedback.js'))
        .pipe(uglify())
        .pipe(gulp.dest('feedbacks/static/feedbacks/built'));
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
