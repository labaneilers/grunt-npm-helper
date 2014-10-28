"use strict";

var npm = require("npm");
var npmconf = require("npm/lib/config/core.js");
var configDefs = npmconf.defs;
var shorthands = configDefs.shorthands;
var types = configDefs.types;
var nopt = require("npm/node_modules/nopt");
var extend = require("util")._extend;

module.exports = function (grunt) {

    grunt.registerMultiTask("npm", "Wrapper for npm", function () {
        var done = this.async();

        // Use the same command line arg parsing as the actual npm cli
        var conf = nopt(types, shorthands, [null, null].concat(this.data.args));
        npm.argv = conf.argv.remain;

        // Grab the command
        if (npm.deref(npm.argv[0])) {
            npm.command = npm.argv.shift();
        }

        // Command line args should win over configuration
        var coalescedConf = extend(this.options(), conf);

        npm.load(
            coalescedConf,
            function (er) {
                if (er) {
                    grunt.log.error(er);
                    done(false);
                }

                npm.commands[npm.command](npm.argv, function (er) {
                    if (er) {
                        grunt.log.error(er);
                        done(false);
                    }

                    done();
                });
            });
    });
};