/**
 * @author VovanR <mail@vovanr.com>
 */

require([
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

    /**
     * @param {Object} form
     */
    var blockForm = function (form) {
        form = $(form);
        form.addClass('_state_ajax-waiting');
        form.find('[type=\'submit\']').attr('disabled', 'disabled');
    };

    /**
     * @param {Object} form
     */
    var unblockForm = function (form) {
        form = $(form);
        form.removeClass('_state_ajax-waiting');
        form.find('[type=\'submit\']').removeAttr('disabled');
    };

    /**
     * @param {Object} form
     */
    var resetForm = function (form) {
        $(form).find('[autocomplete=\'off\']').each(function () {
            var $this = $(this);
            $this.val($this.prop('defaultValue'));
        });
    };

    /**
     */
    var DjFeedback = function () {
        var toggler = new Toggler({
            name: 'dj-feedback',
        });

        var form = $('.b-dj-feedback__form');

        form.validate({
            errorClass: 'help-block',
            errorElement: 'span',
            /**
            */
            highlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').addClass('has-error');
            },
            /**
            */
            unhighlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            /**
            */
            submitHandler: function (form) {
                $.ajax({
                    url: form.action,
                    type: 'POST',
                    data: new FormData(form),
                    processData: false,
                    contentType: false,
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
                        resetForm(form);
                        toggler.close();
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
