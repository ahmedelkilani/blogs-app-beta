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
                'app/scripts/**/*.js'
            ]
        },
        // configure compass to compile sass -----------------------------------
        compass: {                  // Task
            dist: {                 // Target
                options: {          // Target options
                    sourcemap: true,
                    basePath: 'app/',
                    sassDir: 'styles/sass',
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
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            vendor: {
                files: {
                    'app/dist/js/vendor.min.js': [
                        'app/vendor/bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js',
                        'app/vendor/bower_components/angular/angular.js',
                        'app/vendor/bower_components/angular-route/angular-route.js',
                        'app/vendor/bower_components/jquery/dist/jquery.js',
                        'app/vendor/bower_components/jquery.easing/js/jquery.easing.js',
                        'app/vendor/bower_components/imagesloaded/imagesloaded.pkgd.js',
                        'app/vendor/bower_components/respond-minmax/src/respond.js',
                        'app/vendor/bower_components/waypoints/lib/jquery.waypoints.js',
                        'app/vendor/js/SmoothScroll.js',
                        'app/vendor/bower_components/skrollr/src/skrollr.js',
                        'app/vendor/js/sly.min.js',
                        'app/vendor/bower_components/perfect-scrollbar/src/perfect-scrollbar.js',
                        'app/vendor/bower_components/retinajs/src/retina.js',
                        'app/vendor/bower_components/jquery.localScroll/jquery.localScroll.js',
                        'app/vendor/bower_components/jquery.scrollTo/jquery.scrollTo.js',
                        'app/vendor/bower_components/jQuery-One-Page-Nav/jquery.nav.js',
                        'app/vendor/bower_components/jquery-hoverIntent/jquery.hoverIntent.js',
                        'app/vendor/bower_components/superfish/js/superfish.js',
                        'app/vendor/bower_components/jquery-placeholder/jquery.placeholder.js',
                        'app/vendor/bower_components/countUp.js/countUp.js',
                        'app/vendor/bower_components/isotope/dist/isotope.pkgd.js',
                        'app/vendor/js/jquery.flatshadow.js',
                        'app/vendor/bower_components/jquery-knob/src/jquery.knob.js',
                        'app/vendor/js/jflickrfeed.min.js',
                        'app/vendor/bower_components/jquery-instagram/src/instagram.js',
                        'app/vendor/bower_components/twitter-fetcher/js/twitterFetcher.js',
                        'app/vendor/bower_components/bootstrap/dist/js/bootstrap.js',
                        'app/vendor/js/responsive.tab.js',
                        'app/vendor/bower_components/magnific-popup/dist/jquery.magnific-popup.js',
                        'app/vendor/bower_components/jquery-validation/dist/jquery.validate.js',
                        'app/vendor/bower_components/owl-carousel/owl-carousel/owl.carousel.js',
                        'app/vendor/js/jquery.flexslider.js',
                        'app/vendor/bower_components/jquery-ui/jquery-ui.js',
                        'app/vendor/js/zoomsl-3.0.min.js',
                        'app/vendor/bower_components/infinite-scroll/jquery.infinitescroll.js',
                        'app/vendor/js/revolution-slider/js/jquery.themepunch.tools.min.js',
                        'app/vendor/js/revolution-slider/js/jquery.themepunch.revolution.min.js',
                        'app/vendor/js/video.js',
                        'app/vendor/js/bigvideo.js'

                    ]
                }
            },
            app: {
                files: {
                    'app/dist/js/app.min.js': [
                        'app/scripts/*.js'
                    ],
                    'app/dist/js/components.min.js': [
                        'app/scripts/components/version/*.js',
                        'app/scripts/components/date/*.js',
                        'app/scripts/components/core/*.js'
                    ],
                    'app/dist/js/main.min.js': [
                        'app/scripts/components/*.js'
                    ],
                    'app/dist/js/controllers.min.js': [
                        'app/scripts/controllers/**/*.js'
                    ]
                }
            }
        }
    });

    // DEFAULT TASK
    grunt.registerTask('default', ['uglify', 'compass']);

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