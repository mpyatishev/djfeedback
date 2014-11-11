/**
 * @author Vladimir Rodkin <r.vladimir@dlinksys.ru>
 */

// Тесты имеют свой базовый путь, поэтому так:
// if (!requirejs.config.baseUrl) {
//     requirejs.config.baseUrl = '/static/';
// }

// Пути к библиотекам, типа jQuery
var p = './bower_components/bower_components'
requirejs.config({
    paths: {
        jquery: p + '/jquery/dist/jquery',
        jqueryCookie: p + '/jquery.cookie/jquery.cookie',
        jqueryValidate: p + '/jquery-validation/dist/jquery.validate',

        toggler: p + '/b-toggler/index',
    },
    shim: {
        jqueryCookie: ['jquery'],
    },
});

require(['./feedbacks/static/feedbacks/js/dj-feedback']);
