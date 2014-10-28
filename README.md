grunt-npm-helper [![Build Status](https://secure.travis-ci.org/labaneilers/grunt-npm-helper.png?branch=master)](http://travis-ci.org/labaneilers/grunt-npm-helper)
======

grunt-npm-helper is a [grunt](http://gruntjs.com) binding for [npm](https://npmjs.org). It provides the full command line API of npm through grunt configuration.
 
## Getting Started
This plugin requires Grunt `^0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-npm-helper --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('npm');
```
### Usage example

* args mimics the command line API for npm
* options mimics the configuration API for npm

```js
grunt.initConfig({
  npm: {
    publish: {
      args: ["publish"],
      options: {
        registry: "https://mypersonalregistry",
        "strict-ssl": false,
        json: true
      }
    }
  }
});
```