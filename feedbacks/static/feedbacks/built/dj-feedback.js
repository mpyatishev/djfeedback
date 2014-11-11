define("toggler", [
    'jquery',
], function (
    $
) {

    'use strict';

    var Toggler;
    var opennedClass = '_state_opened';

    /**
     * Toggler module
     *
     * @param {Object} o Options
     * @param {String} o.name
     * @constructor
     */
    Toggler = function (o) {
        if (!o) {
            throw new Error('Missing options');
        }

        this._name = o.name;

        this._bToggler = null;
        this._bPanel = null;

        this._initialize();
    };

    Toggler.prototype = {
        /**
         * Initialize
         *
         * @private
         */
        _initialize: function () {
            console.info('Toggler init');

            this._bToggler = $('.b-toggler__toggler._name_' + this._name);
            this._bPanel = $('.b-toggler__panel._name_' + this._name);

            this._bindControls();
        },

        /**
         * Bindings
         *
         * @private
         */
        _bindControls: function () {
            this._bToggler.on('click', function () {
                this.toggle();
            }.bind(this));
        },

        /**
         * Open toggler panel
         *
         * @private
         */
        _open: function () {
            this._bToggler.addClass(opennedClass);
            this._bPanel.addClass(opennedClass);
        },

        /**
         * Close toggler panel
         *
         * @private
         */
        _close: function () {
            this._bToggler.removeClass(opennedClass);
            this._bPanel.removeClass(opennedClass);
        },

        /**
         * Toggle toggler panel
         */
        toggle: function () {
            if (this._bToggler.hasClass(opennedClass)) {
                this._close();
            } else {
                this._open();
            }
        },

        /**
         * Open toggler panel
         */
        open: function () {
            this._open();
        },

        /**
         * Close toggler panel
         */
        close: function () {
            this._close();
        },
    };

    return Toggler;

});



define("feedbacks/static/feedbacks/js/dj-feedback", [
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
            errorClass: 'help-block',
            errorElement: 'span',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass('has-error');
            },
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



//# sourceMappingURL=dj-feedback.js.map