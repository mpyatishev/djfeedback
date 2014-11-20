{
    appDir: '../js',
    baseUrl: '.',
    dir: '../built',
    optimize: 'uglify2',
    optimizeCss: 'none',
    paths: {
        // jquery: '../../../bower_components/vendor/jquery/dist/jquery',
        jqueryCookie: '../../../bower_components/vendor/jquery.cookie/jquery.cookie',
        jqueryValidate: '../../../bower_components/vendor/jquery-validation/dist/jquery.validate',
        toggler: '../../../bower_components/vendor/b-toggler/index',

        // Apps paths
        feedbacks: '../feedbacks/js/app'
    },
    modules: [
        {
            name: './common',
            include: [
                // 'jquery',
                'jqueryCookie',
                'jqueryValidate'
            ]
        },
        {
            name: './dj-feedback',
            include: ['feedbacks/dj-feedback-app'],
            exclude: ['./common']
        }
    ]
}
