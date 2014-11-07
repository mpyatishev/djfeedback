/**
 * @author VovanR <mail@vovanr.com>
 */

define([
    'jquery',
    'jqueryCookie',
    'toggler',
], function (
    $,
    _jqueryCookie,
    Toggler
) {

    /**
     * these HTTP methods do not require CSRF protection
     *
     * @param {String} method
     * @return {Boolean}
     */
    var csrfSafeMethod = function (method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    };

    /**
     */
    var DjFeedback = function () {
        var toggler = new Toggler({
            name: 'dj-feedback',
        });

        var form = $('.b-dj-feedback__form');
        form.on('submit', function (e) {
            e.preventDefault();

            var data = new FormData(form[0]);
            $.ajax({
                url: window.AjaxLinks.feedbackPost,
                type: 'POST',
                data: data,
                processData: false,
                contentType: false,
                /**
                 */
                beforeSend: function (xhr, settings) {
                    if (!csrfSafeMethod(settings.type)) {
                        xhr.setRequestHeader('X-CSRFToken', $.cookie('csrftoken'));
                    }
                },
                /**
                 */
                success: function (data, textStatus, jqXHR) {
                    console.log(data);
                },
                /**
                 */
                error: function (jqXHR, textStatus, error) {
                    console.log(error);
                }
            });
        });
    };

    return new DjFeedback();

});
