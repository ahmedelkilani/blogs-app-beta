module.exports = function (config) {
    config.set({

        basePath: './app/',

        files: [
            'vendor/bower_components/angular/angular.js',
            'vendor/bower_components/angular-route/angular-route.js',
            'vendor/bower_components/angular-mocks/angular-mocks.js',
            'js/*.js',
            'js/components/**/*.js',
            'js/controllers/**/*.js',
            'js/service/**/*.js',
            'js/tests/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
