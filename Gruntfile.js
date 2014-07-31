'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'lib/app.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-nodemon');
}