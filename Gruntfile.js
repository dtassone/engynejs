module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                laxcomma:true
            },
            all: ['*.js', 'lib/**/*.js', 'example/*.js', 'config/*.json', '!lib/client/api/**/*.js'],
            with_overrides: {
                options: {
                    expr: true
                },
                files: {
                    src: ['lib/client/api/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask("default", ["jshint"]);
    grunt.registerTask("ci-build", ["jshint"]);
};