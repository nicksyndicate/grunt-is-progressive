/*
 * grunt-is-progressive
 * https://github.com/nicksyndicate/grunt-is-progressive
 *
 * Copyright (c) 2015 Nikita Stepanenko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var isProgressive = require('is-progressive'),
      sizeOf = require('image-size'),
      imageCount = 0,
      log = [];

  grunt.registerMultiTask('is_progressive', 'Grunt plugin for checking images if they are progressive', function() {
    var options = this.options({
      pixelCount: 0
    });

    this.files.forEach(function(filepath) {
      var size;

      if (filepath.src.length) {
        for (var i = 0; i < filepath.src.length; i++) {
          size = sizeOf(filepath.src[i]);

          if (options.pixelCount < (size.width * size.height)) {
            if (!isProgressive.fileSync(String(filepath.src[i]))) {
              log.push(filepath.src[i]);
            }

            imageCount++;
          }
        }
      } else {
        size = sizeOf(filepath.src);

        if (options.pixelCount < (size.width * size.height)) {
          if (!isProgressive.fileSync(String(filepath.src))) {
            log.push(filepath.src);
          }

          imageCount++;
        }
      }
    });

    if (log.length) {
      grunt.log.writeln('Image is not progressive');
      for (var i = 0; i < log.length; i++) {
        grunt.log.error(log[i]);
      }

      grunt.fail.warn('');
    } else {
      grunt.log.writeln('Checked ' + imageCount + ' images');
    }

  });

};