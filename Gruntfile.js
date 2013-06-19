module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      all: [
      'Gruntfile.js',
      'lib/**/*.js',
      'test/**/*.js'
      ]
    },
    bgShell: {
      dropDatabase: {
        cmd: 'mongo mwc_logs_test --eval "db.dropDatabase()"',
        bg: false
      }
    },
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

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-bg-shell');

  grunt.registerTask('test', ['jshint', 'bgShell:dropDatabase', 'mochacli', 'bgShell:dropDatabase']);
};