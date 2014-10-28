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

The following configuration options are supported:

* _exit
* always-auth
* argv
* bin-links
* browser
* cache
* cache-lock-retries
* cache-lock-stale
* cache-lock-wait
* color
* depth
* description
* dev
* editor
* engine-strict
* fetch-retries
* fetch-retry-factor
* fetch-retry-maxtimeout
* fetch-retry-mintimeout
* force
* git
* git-tag-version
* global
* globalconfig
* group
* heading
* ignore-scripts
* init-module
* init.author.email
* init.author.name
* init.author.url
* init.license
* init.version
* json
* link
* loglevel
* logstream
* long
* message
* node-version
* npat
* onload-script
* optional
* parseable
* prefix
* production
* proprietary-attribs
* rebuild-bundle
* registry
* rollback
* save
* save-bundle
* save-dev
* save-exact
* save-optional
* save-prefix
* scope
* searchexclude
* searchopts
* searchsort
* shell
* shrinkwrap
* sign-git-tag
* spin
* tag
* tmp
* umask
* unicode
* unsafe-perm
* usage
* user
* user-agent
* userconfig
* viewer