/**
 * @author Vladimir Rodkin <r.vladimir@dlinksys.ru>
 */

// Тесты имеют свой базовый путь, поэтому так:
if (!requirejs.config.baseUrl) {
    requirejs.config.baseUrl = '/static/';
}

// Пути к библиотекам, типа jQuery
requirejs.config({
    baseUrl: requirejs.config.baseUrl, // Путь к статике
    paths: {
        jquery: './vendor/jquery/dist/jquery',
        jqueryCookie: './vendor/jquery.cookie/jquery.cookie',
        jqueryValidate: './vendor/jquery-validation/dist/jquery.validate',

        toggler: './b-toggler/index',
    },
    shim: {
        jqueryCookie: ['jquery'],
    },
});