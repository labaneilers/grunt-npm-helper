"use strict";

var npmWrapper = require("../lib/npm-wrapper");

module.exports = function (grunt) {

    grunt.registerMultiTask("npm", "Wrapper for npm", function () {
        var done = this.async();

        npmWrapper(this.data.args, this.options(), function (er) {
            if (er) {
                grunt.log.error(er);
                done(false);
                return;
            }

            done();
        });
    });
};