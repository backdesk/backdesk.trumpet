module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      ci : {
        configFile: './karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['karma']);
};