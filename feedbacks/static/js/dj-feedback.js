/**
 * @author VovanR <mail@vovanr.com>
 */

define([
    'jquery',
    'jqueryCookie',
    'jqueryValidate',
    'toggler',
], function (
    $,
    _jqueryCookie,
    jqueryValidate,
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

    var blockForm = function (form) {
        form = $(form);
        form.addClass('_state_ajax-waiting');
        form.find('[type=\'submit\']').attr('disabled', 'disabled');
    };

    var unblockForm = function (form) {
        form = $(form);
        form.removeClass('_state_ajax-waiting');
        form.find('[type=\'submit\']').removeAttr('disabled');
    };

    /**
     */
    var DjFeedback = function () {
        var toggler = new Toggler({
            name: 'dj-feedback',
        });

        var form = $('.b-dj-feedback__form');

        form.validate({
            submitHandler: function (form) {
                $.ajax({
                    url: form.action,
                    type: 'POST',
                    /**
                     */
                    beforeSend: function (xhr, settings) {
                        if (!csrfSafeMethod(settings.type)) {
                            xhr.setRequestHeader('X-CSRFToken', $.cookie('csrftoken'));
                        }
                        blockForm(form);
                    },
                    /**
                     */
                    success: function (data, textStatus, jqXHR) {
                        console.log(data);
                        unblockForm(form);
                    },
                    /**
                     */
                    error: function (jqXHR, textStatus, error) {
                        console.log(error);
                        unblockForm(form);
                    },
                });
            },
        });
    };

    return new DjFeedback();

});
