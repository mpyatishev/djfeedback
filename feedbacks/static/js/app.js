requirejs.config({
    baseUrl: '/static/js',
    paths: {
        jquery: '../jquery/dist/jquery',
        jqueryCookie: '../jquery.cookie/jquery.cookie',
        jqueryValidate: '../jquery-validation/dist/jquery.validate',

        toggler: '../b-toggler/index',
    },
    shim: {
        jqueryCookie: ['jquery'],
    },
});

define('jquery', [], function () { return window.jQuery });

requirejs(['app/main']);
