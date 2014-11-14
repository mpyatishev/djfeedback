requirejs.config({
    baseUrl: '/static/js',
    paths: {
        jquery: '../jquery/dist/jquery',
        jqueryCookie: '../jquery.cookie/jquery.cookie',
        jqueryValidate: '../jquery-validation/dist/jquery.validate',

        toggler: '../b-toggler/index',

        app: './app'
    },
    shim: {
        jqueryCookie: ['jquery'],
    },
});

requirejs(['app/main']);
