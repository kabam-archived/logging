module.exports = function (grunt) {

  grunt.initConfig({
    mochacli: {
      options: {
        require: ['should'],
        reporter: 'spec',
        bail: true,
        recursive: true,
        timeout: '15s'
      },
      all: ['test/**/*.js']
    }
	});

  grunt.loadNpmTasks('grunt-mocha-cli');

  grunt.registerTask('test', ['mochacli']);
};