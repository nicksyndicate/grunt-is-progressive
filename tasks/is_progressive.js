/*
 * grunt-is-progressive
 * https://github.com/nicksyndicate/grunt-is-progressive
 *
 * Copyright (c) 2015 Nikita
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var isProgressive = require('is-progressive'),
      imageCount = 0,
      log = [];

  grunt.registerMultiTask('is_progressive', 'Grunt plugin for checking images if they are progressive', function() {

    this.files.forEach(function(filepath) {
      if (filepath.src.length) {
        for (var i = 0; i < filepath.src.length; i++) {
          if (!isProgressive.fileSync(String(filepath.src[i]))) {
            log.push(filepath.src[i]);
          }

          imageCount++;
        }
      } else {
        if (!isProgressive.fileSync(String(filepath.src))) {
          log.push(filepath.src);
        }

        imageCount++;
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