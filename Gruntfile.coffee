path = require 'path'

libs = (l...)-> path.join(__dirname, file)+".coffee" for file in l
 
module.exports = (grunt) ->
        files = libs 'boot/libs','config/app', 'config/db', 'app/bot'
        build = path.join __dirname, 'dist/build.js'
        options =
                coffee:
                        options:
                                bare: true
                                map: true
                                join: true
                        compileJoined: 
                                files: 
                                      "#{build}": files 

        grunt.initConfig options
        grunt.loadNpmTasks 'grunt-contrib-coffee'
        grunt.registerTask 'default', ['coffee']

