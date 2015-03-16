module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/vendor/bower_components/angular/angular.js',
            'app/vendor/bower_components/angular-route/angular-route.js',
            'app/vendor/bower_components/angular-mocks/angular-mocks.js',
            'app/scripts/components/version/**/*.js',
            'app/scripts/components/date/**/*.js',
            'app/scripts/controllers/**/*.js',
            'app/scripts/service/**/*.js',
            'app/scripts/tests/unit/**/*.js'
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
