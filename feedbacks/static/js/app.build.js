/**
 * Build profile for django-require.
 *
 * This supports all the normal configuration available to a r.js build profile. The only gotchas are:
 *
 *   - 'baseUrl' will be overidden by django-require during the build process.
 *   - 'appDir' will be overidden by django-require during the build process.
 *   - 'dir' will be overidden by django-require during the build process.
 */
({

    // appDir: "./js",
    // point to the shim config we set up before
    mainConfigFile: "./app.js",
    exclude: [
        "jquery",
    ],
    // modules: [
    //     {
    //         "name": "app"
    //     }
    // ],

    optimizeCss: "none",

    /*
     * How to optimize all the JS files in the build output directory.
     * Right now only the following values are supported:
     * - "uglify": Uses UglifyJS to minify the code.
     * - "uglify2": Uses UglifyJS2.
     * - "closure": Uses Google's Closure Compiler in simple optimization
     * mode to minify the code. Only available if REQUIRE_ENVIRONMENT is "rhino" (the default).
     * - "none": No minification will be done.
     */
    optimize: "none",

    /*
     * By default, comments that have a license in them are preserved in the
     * output. However, for a larger built files there could be a lot of
     * comment files that may be better served by having a smaller comment
     * at the top of the file that points to the list of all the licenses.
     * This option will turn off the auto-preservation, but you will need
     * work out how best to surface the license information.
     */
    preserveLicenseComments: true,

    /*
     * The default behaviour is to optimize the build layers (the "modules"
     * section of the config) and any other JS file in the directory. However, if
     * the non-build layer JS files will not be loaded after a build, you can
     * skip the optimization of those files, to speed up builds. Set this value
     * to true if you want to skip optimizing those other non-build layer JS
     * files.
     */
    skipDirOptimize: false

})