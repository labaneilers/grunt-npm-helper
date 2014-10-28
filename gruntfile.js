/* globals module */

module.exports = function (grunt) {
    var config = {
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            uses_defaults: ["gruntfile.js", "./tasks/**/*.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        npm: {
            defaultThing: {
                args: ["install", "less"],
                options: {
                    //registry: "http://www.idontexistatalleveranywhere.com",
                    "loglevel": "silent",
                    //"parseable": false,
                    "strict-ssl": true,
                    "long": false,
                    "unicode": false,
                    "json": false
                }
            }
        }
    };

    // Project configuration.
    grunt.initConfig(config);

    // NPM tasks
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.loadTasks("./tasks/");

    grunt.registerTask("travis", "default");

    grunt.registerTask("default", ["jshint"]);
};