var webpack = require('webpack'),
    wpConfig = require("./public/webpack.config.js");

module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      ci : {
        configFile: './karma.conf.js',
        singleRun: true
      }
    },

    webpack : {
      options : wpConfig
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('deploy', ['karma', 'webpack:prod']);
  grunt.registerTask('default', ['webpack']);
};