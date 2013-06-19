module.exports = function (grunt) {

  grunt.initConfig({
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

  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-bg-shell');

  grunt.registerTask('test', [ 'bgShell:dropDatabase', 'mochacli', 'bgShell:dropDatabase']);
};