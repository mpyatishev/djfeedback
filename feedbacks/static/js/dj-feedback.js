define('jquery', [], function () { return window.jQuery });

requirejs.config({
    baseUrl: '/static/js',
    paths: {
        jqueryCookie: '../jquery.cookie/jquery.cookie',
        jqueryValidate: '../jquery-validation/dist/jquery.validate',

        toggler: '../b-toggler/index',
    },
    shim: {
        jqueryCookie: ['jquery'],
    },
});

requirejs(['../feedbacks/js/app/dj-feedback-app']);
