// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function (grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        // all of our configuration will go here

        // configure jshint to validate js files -----------------------------------
        jshint: {
            options: {
                reporter: require('jshint-stylish'), // use jshint-stylish to make our errors look and read good
                globals: {
                    'angular': true,
                    'describe': true,
                    'it': true,
                    'expect': true,
                    'beforeEach': true,
                    'afterEach': true,
                    'module': true,
                    'inject': true
                }
            },
            // when this task is run, lint the Gruntfile and all js files in app
            build: [
                '*.js',
                'public/js/**/*.js'
            ]
        },
        // configure compass to compile sass -----------------------------------
        compass: {                  // Task
            dist: {                 // Target
                options: {          // Target options
                    sourcemap: true,
                    basePath: 'public/',
                    sassDir: 'sass',
                    cssDir: 'dist/css',
                    httpPath: '/',
                    imagesDir: 'assets/img',
                    fontsDir: 'assets/fonts',
                    environment: 'production'
                }
            }
        },
        // configure uglify to minify js files -------------------------------------
        uglify: {
            options: {
                sourceMap: true,
                banner: '/*\n <%= pkg.description %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            vendor: {
                files: {
                    'public/dist/js/vendor.min.js': [
                        'public/vendor/bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js',
                        'public/vendor/bower_components/jquery/dist/jquery.js',
                        'public/vendor/bower_components/angular/angular.js',
                        'public/vendor/bower_components/angular-route/angular-route.js',
                        'public/vendor/bower_components/angular-resource/angular-resource.js',
                        'public/vendor/bower_components/jquery.easing/js/jquery.easing.js',
                        'public/vendor/bower_components/imagesloaded/imagesloaded.pkgd.js',
                        'public/vendor/bower_components/respond-minmax/src/respond.js',
                        'public/vendor/bower_components/waypoints/lib/jquery.waypoints.js',
                        'public/vendor/js/SmoothScroll.js',
                        'public/vendor/bower_components/skrollr/src/skrollr.js',
                        'public/vendor/js/sly.min.js',
                        'public/vendor/bower_components/perfect-scrollbar/src/perfect-scrollbar.js',
                        'public/vendor/bower_components/retinajs/src/retina.js',
                        'public/vendor/bower_components/jquery.localScroll/jquery.localScroll.js',
                        'public/vendor/bower_components/jquery.scrollTo/jquery.scrollTo.js',
                        'public/vendor/bower_components/jQuery-One-Page-Nav/jquery.nav.js',
                        'public/vendor/bower_components/jquery-hoverIntent/jquery.hoverIntent.js',
                        'public/vendor/bower_components/superfish/js/superfish.js',
                        'public/vendor/bower_components/jquery-placeholder/jquery.placeholder.js',
                        'public/vendor/bower_components/countUp.js/countUp.js',
                        'public/vendor/bower_components/isotope/dist/isotope.pkgd.js',
                        'public/vendor/js/jquery.flatshadow.js',
                        'public/vendor/bower_components/jquery-knob/src/jquery.knob.js',
                        'public/vendor/js/jflickrfeed.min.js',
                        'public/vendor/bower_components/jquery-instagram/src/instagram.js',
                        'public/vendor/bower_components/twitter-fetcher/js/twitterFetcher.js',
                        'public/vendor/bower_components/bootstrap/dist/js/bootstrap.js',
                        'public/vendor/js/responsive.tab.js',
                        'public/vendor/bower_components/magnific-popup/dist/jquery.magnific-popup.js',
                        'public/vendor/bower_components/jquery-validation/dist/jquery.validate.js',
                        'public/vendor/bower_components/owl-carousel/owl-carousel/owl.carousel.js',
                        'public/vendor/js/jquery.flexslider.js',
                        'public/vendor/bower_components/jquery-ui/jquery-ui.js',
                        'public/vendor/js/zoomsl-3.0.min.js',
                        'public/vendor/bower_components/infinite-scroll/jquery.infinitescroll.js',
                        'public/vendor/js/revolution-slider/js/jquery.themepunch.tools.min.js',
                        'public/vendor/js/revolution-slider/js/jquery.themepunch.revolution.min.js',
                        'public/vendor/js/video.js',
                        'public/vendor/js/bigvideo.js',
                        'public/vendor/bower_components/uri.js/src/URI.js'
                    ]
                }
            },
            app: {
                files: {
                    'public/dist/js/app.min.js': [
                        'public/js/*.js'
                    ],
                    'public/dist/js/components.min.js': [
                        'public/js/components/**/*.js'
                    ],
                    'public/dist/js/services.min.js': [
                        'public/js/services/**/*.js'
                    ],
                    'public/dist/js/controllers.min.js': [
                        'public/js/controllers/**/*.js'
                    ],
                    'public/dist/js/helpers.min.js': [
                        'public/js/helpers/**/*.js'
                    ]
                }
            }
        }
    });

    // DEFAULT TASK
    grunt.registerTask('default', ['jshint', 'uglify', 'compass']);
    // Dev Task
    grunt.registerTask('build:dev', ['jshint', 'uglify:app']);
    // Test TASK
    grunt.registerTask('build:test', ['jshint', 'uglify']);

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

};