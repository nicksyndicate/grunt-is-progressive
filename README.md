# grunt-is-progressive

> Grunt plugin for checking images if they are progressive

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

### Used [node is-progressive](https://github.com/sindresorhus/is-progressive)

```shell
npm install grunt-is-progressive --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-is-progressive');
```

## The "is_progressive" task

### Overview
In your project's Gruntfile, add a section named `is_progressive` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  is_progressive: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.pixelCount
Type: `Number`
Default value: `'0'`

A string value that is used to do something else with whatever else.

```js
grunt.initConfig({
  is_progressive: {
    default_options: {
      src: './test/**/*.jpg'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
