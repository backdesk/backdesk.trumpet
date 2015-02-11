var webpack  = require('webpack'),
    wpConfig = require("./public/webpack.config");

module.exports = function(grunt) {
  grunt.initConfig({
    /**
     * Branch out to Karma config for unit tests and code coverage.
     */
    karma: {
      ci : {
        configFile : './karma.conf.js',
        singleRun : true
      }
    },

    webpack : {
      /**
       * Bring in the main config. Possible path scoping issues.
       */
      options : wpConfig,

      /**
       * Used as a production step to optimize and minify source.
       */
      build : {
        plugins : wpConfig.plugins.concat(
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin({
            compress : true,
            output : {
              comments : false
            }
          })
        )
      },

      /**
       */
      "build-dev" : {
        devtool : "sourcemap",
        debug : true
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['webpack:build']);
  grunt.registerTask("build", ["karma:ci","webpack:build"]);
};