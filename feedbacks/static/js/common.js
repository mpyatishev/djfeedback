requirejs.config({
    baseUrl: '/static/js',
    paths: {
        // jquery: '../vendor/jquery/dist/jquery',
        jqueryCookie: '../vendor/jquery.cookie/jquery.cookie',
        jqueryValidate: '../vendor/jquery-validation/dist/jquery.validate',

        toggler: '../vendor/b-toggler/index',

        feedbacks: '../feedbacks/js/app',
    },
    shim: {
        jqueryCookie: ['jquery'],
    },
});

define('./common', [], function () {  });

define('jquery', [], function () { return window.jQuery; });
